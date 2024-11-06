import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/mongo"

dotenv.config()

const server = express()

const port = process.env.PORT

dbConnection()


server.use(cors({origin: "*"}))

server.use(express.json())


server.listen(port, () => 
    console.log(`Server is running on : http://localhost:${port} `)
)