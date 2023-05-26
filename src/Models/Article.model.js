import mongoose from "mongoose";
import { Schema } from "mongoose";

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consultant",
    },
    images: {
        type: [String],
        required: false,
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
        },
        comment: String,
        default: [],
    }],
}, { timestamps: true });

export const Article = mongoose.model("Article", ArticleSchema);