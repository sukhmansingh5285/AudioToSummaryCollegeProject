// login, logout, register,
// these will make sense once we have inculded the JWT for the authentication

import ErrorHandler from '../errorHandling/error.js'
import {User} from '../models/user.js'


export const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return next(new ErrorHandler("Please fill full form!"));
    }
    
    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return next(new ErrorHandler("Email already registered!"));
    }
    
    const user = await User.create({
      name,
      email,
      password,
    });
    
    res.send("User registered!");
  } catch (error) {
    next(error);
  }
};