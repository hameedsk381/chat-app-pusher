import { Router } from "express";
import { deleteMessage, getAllMessages, sendMessage } from "../controllers/MessageController";
const router = Router()
router.get('/:receiverId',getAllMessages)
router.post('/send',sendMessage)
router.get('/delete',deleteMessage)