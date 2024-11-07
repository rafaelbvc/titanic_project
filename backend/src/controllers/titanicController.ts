import {  Request, Response } from "express";
import TitanicSchema from "../schemas/titanicSchema";


export const getAll = async (request: Request, response: Response) => {
    const passengerData = await TitanicSchema.find().lean()

    if (!passengerData) {
        response.status(404).json({ message: "No data!" })
    }

    response.send(passengerData).status(201).json({ message: "Success" })
}

export const createPassenger = async (request: Request, response: Response) => {

    const { ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked } = request.body


    const data = await TitanicSchema.create({ ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked })


    response.status(201).json({ message: "Passenger was successfully created!" })
    console.log("Passenger was successfully created!", data)
}



export const replacePassenger = async (request: Request, response: Response) => {

    const id = request.params.ids

    

    const passengerID = await TitanicSchema.findOne({ids: id})

    const { ids, passenger, survived, pClass, name, sex, age, sibSp, parch, ticket, fare, cabin, embarked } = request.body

    if (!passengerID) {
        response.status(404).json({ message: "No passenger!" })
    }





     const putPassenger = await TitanicSchema.updateOne({
         ids,
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
     })


     if(passengerID) {
        response.status(201).json(putPassenger)
     }


}

export const deletePassenger =  async(request: Request, response: Response) => {

    const { id } = request.params
    
    const passengerExists = await TitanicSchema.findOne({ids: id})

    if (!passengerExists){
        response.status(404).json({message: "Passenger not found! "})
    }

    await TitanicSchema.deleteOne({id})

    response.status(200).json({message: "Passenger success deleted"})

}