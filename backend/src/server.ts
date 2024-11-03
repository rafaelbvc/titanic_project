import express from "express"

const server = express()

const port = 2020


server.listen(port, () => {
    console.log("Server is running on port: ", port)
})