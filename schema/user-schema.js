import { error } from "console";
import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment'; => this is deprecated 

//new additions 
const counterSchema = mongoose.Schema({
    _id : {type: String, required: true },
    seq : {type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);
//new additions 

const userSchema = mongoose.Schema({
    userId : {type: Number, unique: true }, //new additions 
    name : String,
    username : String,
    email : String,
    phone : String
});

//autoIncrement.initialize(mongoose.connection); //DEPRECATED
// userSchema.plugin(autoIncrement.plugin, 'user'); //use as a plugin => both are DEPRECATED hence, following line 3

//new additions 
userSchema.pre("save", function (next) {
    const doc = this;
    Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
      .then(function (counter) {
        doc.userId = counter.seq;
        next();
      })
      .catch(function (error) {
        return next({error});
      });
  });
  //new additions 

const postUser = mongoose.model('user', userSchema);  //if its mongo then collection name, if mysql then table

export default postUser;