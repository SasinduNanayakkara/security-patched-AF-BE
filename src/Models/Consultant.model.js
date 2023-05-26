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
    },
    prefix: {
        type: String,
        required: false,
        enum: ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', 'Ven']
    },
    profileImage: {
        type: String,
        required: false,
    }
,
    skills: {
        type: [String],
        required: false,
    },
    status: {
        type: String,
        enum: ["Approved","Pending","Rejected"],
        required: false,
        default: "Pending",
    },
    description: {
        type: Object,
        required: false,
    },
    dateTime: {
        type: Date,
        required: false,
    },
    prefix: {
        type: String,
        required: false,
        enum: ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', 'Ven']
    },
    profileImage: {
        type: String,
        required: false,
    }
}, { timestamps: true });

export const Consultant = mongoose.model("Consultant", ConsultantSchema);