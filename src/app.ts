import "express-async-errors"
import express, {Application, json} from "express"
import { handdleErrors } from "./middlewares/handleError.middleware"
import { movieRoutes } from "./routes/movie.routes"
export const app : Application = express()
app.use(json())
app.use('/movies', movieRoutes)
app.use(handdleErrors)
export default app