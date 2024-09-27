import { Module } from '@nestjs/common';
import { SearchHistory } from './entities/search-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SearchHistory])],
  exports: [TypeOrmModule],
})
export class SearchHistoryModule {}
