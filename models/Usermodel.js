import mongoose from "mongoose";
import { UserSchema } from "../schema/UserSchema.js";
const Schema = mongoose.Schema(UserSchema)
export const User = mongoose.model("User",Schema)