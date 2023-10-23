import { Router } from "express";
import { createMovieController, deleteMovieController, readMovieController, updateMovieController } from "../controller/movies.controller";
import { verifyIdExist } from "../middlewares/verifyIdExist.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieCreateSchema } from "../schemas/movies.schemas";

export const movieRoutes : Router = Router();
movieRoutes.use('/:id', verifyIdExist)
movieRoutes.post('/', validateBody(movieCreateSchema),createMovieController)
movieRoutes.get('/', readMovieController)
movieRoutes.patch('/:id', updateMovieController)
movieRoutes.delete('/id', deleteMovieController) 