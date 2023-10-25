//import { NextFunction, Request, Response } from "express";
//import { Movie } from "../entities";
//import { Repository } from "typeorm";
//import { AppDataSource } from "../data-source";
//import AppError from "../errors/AppError.error";
//
//export const verifyNamePathExist =  async(req: Request, res: Response, next: NextFunction) => {
//    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
//    const foundName : Movie | null = await movieRepo.findOneBy({name:(req.body.name)})
//    const {foundMovie} = res.locals
//    if(foundMovie.name === req.body.name){
//        throw new AppError(`Movie already exists.`, 409 )
//    }
//    
//    return next()
//}