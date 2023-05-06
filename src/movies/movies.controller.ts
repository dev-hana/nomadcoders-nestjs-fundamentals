import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')   // router: /movies
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies"
    }

    @Get("/:id") // If you want somethig, you have to ask for it.
    getOne(@Param("id") movieId:string){
        return `Thie will return one movie with the id : ${movieId}`
    }

    @Post()
    crate(){
        return "This will create a movie"
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return `This will remove a movie with the id ${movieId}`
    }

    @Patch('/:id')
    patch(@Param("id") movieId: string){
        return `This will patch a movie with the id ${movieId}`
    }

}
