import { QueryResult } from 'typeorm'
import {z} from 'zod'
const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1).max(50),    
    description: z.string().optional().nullable(),
    duration: z.number().int().positive(),
    price: z.number().int().positive(),
})

export const movieCreateSchema = movieSchema.omit({id: true})
export const movieUpdateSchema = movieCreateSchema.partial()
