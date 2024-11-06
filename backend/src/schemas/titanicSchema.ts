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
        required: true,
        unique: true
    },
    pClass: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    sex: {
        type: String,
        required: true,
        unique: false
    },
    age: {
        type: Number,
        required: true,
        unique: false
    },
    sibSp: {
        type: Number,
        required: false,
        unique: false
    },
    parch: {
        type: Number,
        required: false,
        unique: false
    },
    ticket: {
        type: Number,
        required: false,
        unique: true
    },
    fare: {
        type: String,
        required: false,
        unique: false
    },
    cabin: {
        type: Number,
        required: false,
        unique: false
    },
    embarked: {
        type: Number,
        required: false,
        unique: false
    }
 },    {
     timestamps: true
 })


const TitanicSchema = mongoose.model<ITitanic>("Titanic", titanicSchema)

export default  TitanicSchema 