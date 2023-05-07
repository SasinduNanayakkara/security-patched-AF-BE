import mongoose from "mongoose";
import { Schema } from "mongoose";

const AdminSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Admin = mongoose.model("Admin", AdminSchema);