import mongoose from "mongoose";

export const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/chatusers").then(() => {
    console.log("Db connection succeeded");
  });
};
