import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')   // router: /movies
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies"
    }

    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear} `
    }
    // 아래 Get보다 위에 있어야 /search 작동

    @Get("/:id") // If you want somethig, you have to ask for it.
    getOne(@Param("id") movieId:string){
        return `Thie will return one movie with the id : ${movieId}`
    }

    @Post()
    crate(@Body() movieData){
        // console.log(movieData)
        return movieData
    }


    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return `This will remove a movie with the id ${movieId}`
    }

    @Patch('/:id')
    patch(@Param("id") movieId: string, @Body() updateData){
        return {
            updateMovie: movieId,
            ...updateData
        }
    }
}
