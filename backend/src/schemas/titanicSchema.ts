import mongoose, {Schema, Model} from "mongoose"
import ITitanic from "../interfaces/ITitanic"



const titanicSchema = new mongoose.Schema( {

    ids: {
        type: String,
        required: true,
        unique: true
    },
    passenger: {
        type: String,
        required: true,
        unique: true
    },
    survived: {
        type: String,
        required: true
    },
    pClass: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sibSp: {
        type: Number,
        required: false
    },
    parch: {
        type: Number,
        required: false
    },
    ticket: {
        type: Number,
        required: false,
        unique: true
    },
    fare: {
        type: String,
        required: false
    },
    cabin: {
        type: Number,
        required: false
    },
    embarked: {
        type: Number,
        required: false

    }
 },    {
     timestamps: true
 })


const TitanicSchema = mongoose.model<ITitanic>("Titanic", titanicSchema)

export default  TitanicSchema 