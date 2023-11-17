import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dBconnection = mongoose.connect(process.env.MONGOURI)
    .then(() => {
        console.log('mongodb connected successfully')
    }).catch((error) => console.log(error))


export default dBconnection;