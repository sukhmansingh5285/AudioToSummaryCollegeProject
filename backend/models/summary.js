import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  content:{
    type: String,
    required: true,
    minLength: [30, "Summary must contains at least 30 characters"],
    maxLength: [600, "Summary can't contain more than 600 characters"],
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
})

export const Summary = mongoose.model("Summary", summarySchema);