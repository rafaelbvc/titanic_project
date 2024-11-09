import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/mongo"
import routes from "./routes/Router"

dotenv.config()

const server = express() as any

// const server = express()

const port = process.env.PORT

dbConnection()


server.use(cors({origin: "*"}))

server.use(express.json())

server.use(routes)


server.listen(port, () => 
    console.log(`Server is running on : http://localhost:${port} `)
)

// process.on("SIGINT",()=> {
//     console.log("SIGINT");
//     server.close(()=>{
//         console.log("Server Closed")
//         process.exit(0)
//     })
// })

