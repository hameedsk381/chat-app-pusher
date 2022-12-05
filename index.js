import express from 'express'
import {router as userRouter} from "./routes/User.js"
const app = express()
const port = 9000

app.use(express.json())
app.get('/',(req,res)=>{
res.send("hello world")
})
app.use("/user",userRouter)

app.listen(port,()=>{
    console.log("your app is running on port " + port)
})