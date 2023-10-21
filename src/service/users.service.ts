import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import  Movie  from "../entities/movies.entity";
import AppError from "../errors/AppError.error";

export const createMovieService = async (data: Omit<Movie, 'id'>):Promise<Movie>=> {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const newMovie: Movie = await repo.save(data)
    return newMovie;
}

export const readMovieServcie = async (data: Omit<Movie, 'id'>):Promise<Movie[]>=>{
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movies : Movie[] = await repo.find()
    return movies
}

export const deleteMovie = async (movieId : number): Promise<void> => {
    const repo : Repository<Movie> = AppDataSource.getRepository(Movie)
    const movie : Movie | null = await repo.findOne({where: {id: movieId}})
    
    if(!movie){
        throw new AppError('Movie not found',404)
    }
    await repo.remove(movie)
    
    
}