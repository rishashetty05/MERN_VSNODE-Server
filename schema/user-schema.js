import { error } from "console";
import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment'; => this is deprecated 

const counterSchema = mongoose.Schema({
    _id : {type: String, required: true },
    seq : {type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

const userSchema = mongoose.Schema({
    userId : {type: Number, unique: true },
    name : String,
    username : String,
    email : String,
    phone : String
});

//autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user'); //use as a plugin => both are deprecated hence, following line 3

userSchema.pre("save", function (next) {
    const doc = this;
    Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
      .then(function (counter) {
        doc.userId = counter.seq.toString();
        next();
      })
      .catch(function (error) {
        return next({error});
      });
  });

const postUser = mongoose.model('user', userSchema);  //if its mongo then collection name, if mysql then table

export default postUser;