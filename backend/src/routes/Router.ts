import {Router} from "express"
import { createPassenger, deletePassenger, getAll, replacePassenger } from "../controllers/titanicController"


const routes = Router()

routes.get("/passenger", getAll)

routes.post("/new/passenger", createPassenger)

routes.put("/passenger/update/:ids", replacePassenger)

routes.delete("/passenger/delete/:ids", deletePassenger)

export default routes