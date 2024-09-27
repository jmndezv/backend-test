import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { RatePokemonDto } from './dto/rate-pokemon.dto';
import { SearchHistory } from 'src/search-history/entities/search-history.entity';

@Injectable()
export class PokemonsService {
  private baseUrl = `https://pokeapi.co/api/v2/pokemon`;

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,

    @InjectRepository(SearchHistory)
    private readonly historyRepository: Repository<SearchHistory>,

    private readonly axiosAdapter: AxiosAdapter,
  ) {}

  async getAll(offset: number, limit: number) {
    return await this.axiosAdapter.get<PokemonListResponse>(
      `${this.baseUrl}?offset=${offset}&limit=${limit}`,
    );
  }

  async getOne(name: string) {
    return await this.axiosAdapter.get<Pokemon>(`${this.baseUrl}/${name}`);
  }

  async getFiltered(name: string, operation: string, baseExperience: number) {
    try {
      const search = this.historyRepository.create({
        name,
        operation,
        baseExperience,
      });

      await this.historyRepository.save(search);

      const query = this.pokemonRepository
        .createQueryBuilder('pokemon')
        .where('pokemon.name ILIKE :name', { name: `%${name}%` });
      switch (operation) {
        case 'gt':
          query.andWhere('pokemon.base_experience > :baseExperience', {
            baseExperience,
          });
          break;
        case 'lt':
          query.andWhere('pokemon.base_experience < :baseExperience', {
            baseExperience,
          });
          break;
        case 'ge':
          query.andWhere('pokemon.base_experience >= :baseExperience', {
            baseExperience,
          });
          break;
        case 'le':
          query.andWhere('pokemon.base_experience <= :baseExperience', {
            baseExperience,
          });
          break;
        case 'eq':
          query.andWhere('pokemon.base_experience = :baseExperience', {
            baseExperience,
          });
          break;
        default:
          throw new BadRequestException('Operator not provided');
      }

      const pokemons = await query.getMany();
      return pokemons;
    } catch (error) {
      throw new InternalServerErrorException(
        'Could not get the pokemon(s)',
        error,
      );
    }
  }

  async ratePokemon(ratePokemonDto: RatePokemonDto) {
    const { id, punctuation } = ratePokemonDto;

    try {
      const pokemon = await this.pokemonRepository.findOne({ where: { id } });

      if (!pokemon) throw new NotFoundException('Pokémon not found');

      pokemon.rating = punctuation;

      await this.pokemonRepository.save(pokemon);

      return pokemon;
    } catch (error) {
      throw new InternalServerErrorException('Could not rate Pokémon', error);
    }
  }

  async getTop(topSize: number) {
    try {
      return await this.pokemonRepository
        .createQueryBuilder('pokemon')
        .where('pokemon.rating IS NOT NULL')
        .orderBy('pokemon.rating', 'DESC')
        .take(topSize)
        .getMany();
    } catch (error) {
      throw new InternalServerErrorException(
        'Could not fetch top-rated Pokémon',
        error,
      );
    }
  }

  async loadDb(offset: number, limit: number) {
    await this.pokemonRepository.clear();

    const response = await this.getAll(offset, limit);
    const pokemonList = response.results;

    try {
      for (const pokemonSummary of pokemonList) {
        const pokemonData = await this.getOne(pokemonSummary.name);
        const { id, base_experience, name } = pokemonData;
        const url = pokemonSummary.url;

        const newPokemon = this.pokemonRepository.create({
          id: id,
          base_experience: base_experience,
          name: name,
          url: url,
        });

        await this.pokemonRepository.save(newPokemon);
      }
    } catch (error) {
      throw new InternalServerErrorException('Could not load Pokémon', error);
    }
  }
}
