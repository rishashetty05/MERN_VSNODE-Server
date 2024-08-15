import mongoose from "mongoose";

const Connection = async ( username, password ) => {
//const Connection = async () => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.mbyqfps.mongodb.net/?retryWrites=true&w=majority&appName=crud-app`;
    //const URL = `mongodb+srv://rishashetty05:code4interview@crud-app.mbyqfps.mongodb.net/?retryWrites=true&w=majority&appName=crud-app`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser : true } ); //try mongoose.connect(URL) next time
        console.log("Database connected successfully");
    } catch(error){
        console.log("Error while connecting to database ", error);
    } 
}

export default Connection;