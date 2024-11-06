import { request, Request, Response } from "express";
import TitanicSchema from "../schemas/titanicSchema";

export const getAll = async(request: Request, response: Response) => {
    const passengerData = await TitanicSchema.find().lean()

    if(!passengerData) {
        response.status(404).json({message: "No data!"})
    }

    response.send(passengerData).status(201).json({message: "Success"} )
}

export const createPassenger = async(request: Request, response: Response) => {

    const { ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked } = request.body


    const data = await TitanicSchema.create({ ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked})


    response.status(201).json({message: "Passenger was successfully created!"})
    console.log("Passenger was successfully created!", data)
}