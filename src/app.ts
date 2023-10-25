import "express-async-errors"
import express, {Application, json} from "express"
import { handdleErrors } from "./middlewares/handleError.middleware"
import { movieRoutes } from "./routes/movie.routes"
//import {routes} from "./routes"
//import {handdleErrors} from "./middlewares/handdleErrors.middlewares
const app : Application = express()
app.use(json())
app.use('/movies', movieRoutes)
app.use(handdleErrors)
export default app