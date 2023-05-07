import mongoose from "mongoose";
import { Schema } from "mongoose";

const ConsultantSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Consultant = mongoose.model("Consultant", ConsultantSchema);