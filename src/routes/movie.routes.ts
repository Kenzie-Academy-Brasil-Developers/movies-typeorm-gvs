import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  readMovieController,
  updateMovieController,
} from "../controller/movies.controller";
import { verifyIdExist } from "../middlewares/verifyIdExist.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  movieCreateSchema,
  movieUpdateSchema,
} from "../schemas/movies.schemas";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyNameExist } from "../middlewares/verifyNameExist.middleware";

export const movieRoutes: Router = Router();
movieRoutes.use("/:id", verifyIdExist);
movieRoutes.post(
  "/",
  validateBody(movieCreateSchema),
  verifyNameExist,
  createMovieController
);
movieRoutes.get("/", pagination, readMovieController);
movieRoutes.patch(
  "/:id",
  validateBody(movieUpdateSchema),
  verifyNameExist,
  updateMovieController
);
movieRoutes.delete("/:id", deleteMovieController);
