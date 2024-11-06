import { Request, Response } from "express";
import TitanicSchema from "../schemas/titanicSchema";

export const getAll = async(request: Request, response: Response) => {
    const passengerData = await TitanicSchema.find().lean()

    if(!passengerData) {
        response.status(404).json({message: "No data!"})
    }

    response.send(passengerData).status(201).json({message: "Success"} )
}