import {Router} from "express"
import { getAll } from "../controllers/titanicController"


const routes = Router()

routes.get("/passenger", getAll)

export default routes