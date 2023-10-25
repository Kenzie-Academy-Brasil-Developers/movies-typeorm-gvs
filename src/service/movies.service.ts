import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import Movie from "../entities/movies.entity";
import AppError from "../errors/AppError.error";
import { PaginationParams } from "../interfaces/pagination.interface";

export const createMovieService = async (
  data: Omit<Movie, "id">
): Promise<Movie> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const newMovie: Movie = await repo.save(data);
  return newMovie;
};

export const readMovieService = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<any> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const [movies, count] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: movies,
    count,
  };
};

export const updateMovieService = async (
  movie: Movie,
  data: Partial<Movie>
): Promise<Movie> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
  return await repo.save({ ...movie, ...data });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);

  await repo.remove(movie);
};
