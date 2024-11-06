import {Router} from "express"
import { createPassenger, getAll } from "../controllers/titanicController"


const routes = Router()

routes.get("/passenger", getAll)

routes.post("/new/passenger", createPassenger)

export default routes