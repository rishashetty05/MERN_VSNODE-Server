import mongoose from "mongoose";

const Connection = () => {
    const URL = '';
    try {
        mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser : true } );

    } catch(error){
        console.log("Error while connecting to database ", error);
    }
}