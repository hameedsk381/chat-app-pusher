import mongoose from "mongoose";
const {Schema} = mongoose

export const UserSchema = new Schema({
    username:  String, // String is shorthand for {type: String}
    password: String,
    email:   String,
    contact : Array,
    // date: { type: Date, default: Date.now },
    uuid: String,
   
  });