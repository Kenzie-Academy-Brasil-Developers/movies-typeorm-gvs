import { Request, Response } from "express"
import { createMovieService, deleteMovieService, readMovieService, updateMovieService } from "../service/movies.service"
import { Movie } from "../entities"

export const createMovieController = async (req: Request, res: Response):Promise<Response>=> {
    const movie : Movie = await createMovieService(req.body)
    return res.status(201).json(movie)
}

export const readMovieController = async (req: Request, res: Response):Promise<Response>=>{
    const movies : Movie[] = await readMovieService(res.locals.pagination)
    return res.status(200).json(movies)
}

export const updateMovieController = async (req: Request, res: Response):Promise<Response>=>{
    const {foundMovie} = res.locals
    const movie: Movie = await updateMovieService(foundMovie,req.body)
    return res.status(200).json(movie)
}

export const deleteMovieController = async (req: Request, res: Response): Promise<void> => {
    await deleteMovieService(res.locals.foundMovie)
    res.status(204).json()
}