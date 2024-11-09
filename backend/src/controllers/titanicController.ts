import {  Request, Response } from "express";
import TitanicSchema from "../schemas/titanicSchema";
import ITitanic from "../interfaces/ITitanic";


export const getAll = async (request: Request, response: Response) => {
    const passengerData = await TitanicSchema.find().lean()

    if (!passengerData) {
        response.status(404).json({ message: "No data!" })
        return
    }

    response.status(200).json( passengerData )
}

export const getOne = async(request: Request, response: Response) => {

    const { ids } = request.params

    const passengerData = await TitanicSchema.findOne({ids: ids}).lean()

    if (!passengerData || undefined){

        response.status(404).json({message: "something wrong!"})
        return

    }

    response.status(200).json(passengerData)

}

export const createPassenger = async (request: Request, response: Response) => {

    const { ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked } = request.body


    await TitanicSchema.create({ ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked })


    response.status(201).json({ message: "Passenger was successfully created!" })

}



export const replacePassenger = async (request: Request, response: Response) => {

    const {ids} = request.params

    const { passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked } = request.body

    if(!ids || undefined){
        response.status(400).json({message: "Something went wrong!"})
        return
    }

    await TitanicSchema.findOneAndUpdate({ ids: ids}, {
        passenger,
        survived, 
        pClass, 
        name, 
        sex, 
        age, 
        sibSp, 
        parch, 
        ticket, 
        fare, 
        cabin, 
        embarked
    }
)


    response.status(201).json({message: "Passenger updated!"})
}

export const deletePassenger =  async(request: Request, response: Response) => {

    const { ids } = request.params
    
    const passengerExists = await TitanicSchema.findOne({ids: ids})

    if (!passengerExists || undefined){
        response.status(404).json({message: "Passenger not found! "})
        return
    }

    await TitanicSchema.deleteOne({ids})

    response.status(200).json({message: "Passenger deleted!"})

}