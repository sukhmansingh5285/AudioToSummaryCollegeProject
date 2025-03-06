import mongoose from "mongoose";
import validator from 'validator'

const userSchema = new mongoose.model({
  name:{
    type: String,
    required: true,
    minLength: [3, `Name can't be smaller than 3 characters`],
    maxLength: [20, `Name can't be longer than 20 characters`]
  },
  password:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  }
})

export const User = mongoose.model("User", userSchema);