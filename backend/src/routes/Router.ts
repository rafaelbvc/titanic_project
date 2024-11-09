import {Router} from "express"
import { createPassenger, deletePassenger, getAll, getOne, replacePassenger } from "../controllers/titanicController"


const routes = Router()

routes.get("/passenger", getAll)

routes.get("/passenger/:ids", getOne)

routes.post("/passenger/new", createPassenger)

routes.patch("/passenger/update/:ids", replacePassenger)

routes.delete("/passenger/delete/:ids", deletePassenger)

export default routes