// import mongoose from "mongoose"
// import dotenv from "dotenv"
// dotenv.config()

// const uri =  process.env.URI ? process.env.URI : ""

const dbConnection =  async() => {

    try {
        // await mongoose.connect()
        // await mongoose.connect(uri)
        console.log("Mongo is connected")

    } catch (error: any) {
        console.log("error")
    } 
}

export default dbConnection