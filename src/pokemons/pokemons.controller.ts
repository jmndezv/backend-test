import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { RatePokemonDto } from './dto/rate-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get('all')
  async getAll(
    @Query('offset') offset: number = 5,
    @Query('limit') limit: number = 10,
  ) {
    return await this.pokemonsService.getAll(offset, limit);
  }

  @Get('one')
  async getOne(@Query('name') name: string) {
    return await this.pokemonsService.getOne(name);
  }

  @Get('filter')
  async getFiltered(
    @Query('name') name: string,
    @Query('ope') operation: string,
    @Query('base_experience') baseExperience: number,
  ) {
    return await this.pokemonsService.getFiltered(
      name,
      operation,
      baseExperience,
    );
  }

  @Post('rate')
  async ratePokemon(@Body() ratePokemonDto: RatePokemonDto) {
    return await this.pokemonsService.ratePokemon(ratePokemonDto);
  }

  @Get('top-rated')
  async getTopRated(@Query('size') size: string) {
    const topSize = parseInt(size, 10);

    if (isNaN(topSize) || topSize <= 0)
      throw new BadRequestException(
        'Invalid size parameter. Must be a positive number',
      );

    return await this.pokemonsService.getTop(topSize);
  }

  @Get('load')
  async loadDb(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    try {
      await this.pokemonsService.loadDb(offset, limit);
      return { message: 'Pokémon loaded successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Could not load Pokémon', error);
    }
  }
}
