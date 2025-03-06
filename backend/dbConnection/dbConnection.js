import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect({/*Mongo URI*/}, { dbName })
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch((err) => {
      console.log(`Some Error Occured ${err}`);
    });
};

export default dbConnection;