import express from "express"
import { getUser, createUser, updateUser } from "../Controller/userController.js"

const userRoute = express.Router()

userRoute.get('/', getUser)
userRoute.post('/signup', createUser)
userRoute.get('/update', updateUser)

export default userRoute;