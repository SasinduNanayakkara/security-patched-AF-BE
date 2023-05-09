import mongoose from "mongoose";
import { Schema } from "mongoose";

const AnnouncementSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  dateTime: { type: Number, required: true },
  target: {
    type: String,
    enum: ['client', 'consultant', 'all'],
    required: true
  }
}, { timestamps: true });

export const Announcement = mongoose.model('Announcement', AnnouncementSchema);
