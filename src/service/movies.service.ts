import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import  Movie  from "../entities/movies.entity";
import AppError from "../errors/AppError.error";

export const createMovieService = async (data: Omit<Movie, 'id'>):Promise<Movie>=> {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const newMovie: Movie = await repo.save(data)
    return newMovie;
}

export const readMovieService = async ():Promise<Movie[]>=>{
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movies : Movie[] = await repo.find()
    return movies
}

export const updateMovieService = async (movie: Movie, data: Partial<Movie>):Promise<Movie>=>{
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    return await repo.save({...movie, ...data})
}

export const deleteMovieService = async (movie: Movie): Promise<void> => {
    const repo : Repository<Movie> = AppDataSource.getRepository(Movie)
    
    await repo.remove(movie)
    
    
}