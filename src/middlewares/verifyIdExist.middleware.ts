import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError.error";

export const verifyIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const foundMovie: Movie | null = await movieRepo.findOneBy({
    id: Number(req.params.id),
  });
  if (!foundMovie) {
    throw new AppError("Movie not found", 404);
  }
  res.locals = { ...res.locals, foundMovie };
  return next();
};
