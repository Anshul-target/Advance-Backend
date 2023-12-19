
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

import express from "express"



const app = express()

const connectDB = async () => {


    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`MongoDB connected !! DB HOST:${connectionInstance}`);


        app.listen("8000", () => {
            console.log("Server is listening on the port ", process.env.PORT);
        })


    }
    catch (err) {
        console.log("MONGODB connection error", err);
        process.exit(1);


    }
}
export default connectDB;
