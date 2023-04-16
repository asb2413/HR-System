const express = require('express')
const userRouter = express.Router()

const {signup,login} = require('../../controllers/HRcontrollers/userController')







// signup route

userRouter.post('/signup',signup)



// loin route 

userRouter.post('/login',login)




module.exports = userRouter