import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  // MovieService를 import하고 Controller에 inject 해줌
  providers: [MoviesService],
})
export class MoviesModule {}
