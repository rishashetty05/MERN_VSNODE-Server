import mongoose from "mongoose";

const Connection = () => {
    const URL = '';
    try {
        mongoose.connect(URL, { } )

    } catch(error){
        console.log("Error while connecting to database ", error);
    }
}