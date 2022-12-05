import mongoose from "mongoose";
const {Schema} = mongoose

export const MessageSchema = new Schema({
    uuid:  String, // String is shorthand for {type: String}
    senderId: String,
    receiverId:String,
    content : Array,
    sentAt: { type: Date, default: Date.now }
    
   
  });