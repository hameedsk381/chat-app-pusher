import mongoose from "mongoose";
import { MessageSchema } from "../schema/MessageSchema.js";
const Schema = mongoose.Schema(MessageSchema)
export const User = mongoose.model("User",Schema)