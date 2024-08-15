import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone : String
});

const user = mongoose.model('user', userSchema);  //if its mongo then collection name if mysql then table

export default user;