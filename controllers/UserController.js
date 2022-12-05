import { connection } from "../Database.js"
import { User } from "../models/Usermodel.js"
import bcrypt from 'bcrypt'
import { v4 } from "uuid"
import {validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'
export const register= async(req,res) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    await connection()
    const {name,email,password} = req.body

    const user = new User({
        
        password:bcrypt.hashSync(password,10),
        username:name,
        email:email,
        uuid:v4()
        
    })
    await user.save()
   
res.send({user:user,token: generateToken({email:user.email,uid:user.uid,})})    
}

export const getUserByEmail = async(email)=>{
    await connection()
    return User.findOne({email:email}).exec()
    

}

export const login = async(req,res)=>{
    const {email,password} = req.body


    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    await connection()
    const user = getUserByEmail(email)
    const match = await bcrypt.compare(password,user.password)
    if(match){
        res.send({user:user,token: generateToken({email:user.email,uid:user.uid,})})  
        
    }else{
        return res.status(403).json({errors:"Invalid credentials"})
    }

    
}

export const generateToken= async(user)=>{
return jwt.sign(user,"ruygiuggiughuhoituyf",{expiresIn:"1h"})
}