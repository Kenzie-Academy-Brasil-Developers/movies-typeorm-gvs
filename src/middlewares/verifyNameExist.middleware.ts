import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError.error";

export const verifyNameExist =  async(req: Request, res: Response, next: NextFunction) => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const foundName : Movie | null = await movieRepo.findOneBy({name:(req.body.name)})
    
    if(foundName){
        throw new AppError(`Movie already exists.`, 409 )
    }
    res.locals = {...res.locals, foundName}
    return next()
}