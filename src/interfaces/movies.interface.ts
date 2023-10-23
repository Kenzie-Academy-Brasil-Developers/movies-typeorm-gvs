import { z } from 'zod';

import { DeepPartial, Repository } from 'typeorm';
import { movieCreateSchema } from '../schemas/movies.schemas';
import { Movie } from '../entities';


export type MovieCreate = z.infer<typeof movieCreateSchema>;
export type MovieRead = Array<Movie>;
export type MovieUpdate = DeepPartial<Movie>;

export type MovieRepo = Repository<Movie>