import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CommonModule } from 'src/common/common.module';
import { SearchHistoryModule } from 'src/search-history/search-history.module';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [
    TypeOrmModule.forFeature([Pokemon]),
    CommonModule,
    SearchHistoryModule,
  ],
})
export class PokemonsModule {}
