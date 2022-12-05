import {Router} from 'express'
import { getUserByEmail, login, register } from '../controllers/UserController.js'
export const router = Router()
import {body} from 'express-validator'

router.get("/:id",(req,res)=>{
    res.send("hello " + req.params.id)
})

router.post("/register",body('email').isEmail().custom(
    async(email)=>{
        const user = await getUserByEmail(email)
        if(user){
            return Promise.reject("User already exists")
        }
    }
),
body('password').isLength({min:6,max:14}),
body('name').not().isEmpty(),
register)

router.post("/login",body('email').isEmail().custom(
    async(email)=>{
        const user = await getUserByEmail(email)
        if(user){
            return Promise.reject("User does not exist")
        }
    }
),
body('password').isLength({min:6,max:14}),
body('name').not().isEmpty(),
login)