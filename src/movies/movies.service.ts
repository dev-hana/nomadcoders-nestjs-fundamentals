import { Injectable, NotFoundException, Req, Res } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  // @Req() req, @Res() res => Express앱에 접근 가능
  // NestJS가 Express 위에서 돌아가기 때문(Fastify로 전환 가능, 두개의 프레임워크 위에서 동시에 돌아감)
  // 따라서 Express 객체를 직접적으로 사용하는 것은 좋은 방법이 아님
  // NestJS 방식만 사용하면 Express에서 Fastify로 전환할 때 멈추지 않음
  // getAll(@Req() req, @Res() res): Movie[] {
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDTO) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
