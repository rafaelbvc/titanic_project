import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const server = express()

const port = process.env.PORT


server.use(cors({origin: "*"}))

server.use(express.json())


server.listen(port, () => 
    console.log(`Server is running on : http://localhost:${port} `)
)