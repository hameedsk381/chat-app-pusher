import { connection } from "../Database.js"
import { Message } from "../models/Messagemodel.js"
import bcrypt from 'bcrypt'
import { v4 } from "uuid"
import {validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'

export const getAllMessages = (req,res)=>{
res.send(req,params.receiverId)
}
export const sendMessage = (req,res)=>{

}
export const deleteMessage = (req,res)=>{

}