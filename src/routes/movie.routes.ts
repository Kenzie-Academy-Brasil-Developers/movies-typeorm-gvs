import { Router } from "express";
import { createMovieController, deleteMovieController, readMovieController, updateMovieController } from "../controller/movies.controller";
import { verifyIdExist } from "../middlewares/verifyIdExist.middleware";

export const movieRoutes : Router = Router();
movieRoutes.use('/:id', verifyIdExist)
movieRoutes.post('/', createMovieController)
movieRoutes.get('/', readMovieController)
movieRoutes.patch('/:id', updateMovieController)
movieRoutes.delete('/id', deleteMovieController) 