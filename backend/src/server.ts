import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/mongo"
import router from "./routes/Router"

dotenv.config()

const server = express()

const port = process.env.PORT

dbConnection()


server.use(cors({origin: "*"}))

server.use(express.json())

server.use(router)


server.listen(port, () => 
    console.log(`Server is running on : http://localhost:${port} `)
)