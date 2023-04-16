const HR_USER = require('../../models/userModel')
const jwt = require('jsonwebtoken');





const createToken = (_id)=>{

    return jwt.sign({_id},process.env.JWT_PASSWORD,{expiresIn: '7d'})
 
 }



 

//signup controller
const signup = async (req,res)=>{

        
    
        

        //taking post data from body
        const {username,password,email,phone,identity,age,gender,nationality,job,name} = req.body
        


        try {
            
            const user = await HR_USER.signup(username,password,email,phone,identity,age,gender,nationality,job,name)

            res.status(200).json({user})

        } catch (error) {
            res.status(400).json({error:error.message})
        }
}








//login controller

const login = async (req,res)=>{

    //taking post data from body
    const {username,password} = req.body

    
    try {
        
        const user = await HR_USER.login(username,password)
        const token = createToken(user._id)
        const id = user._id
        res.status(200).json({id,username,token, msg:'logedin'})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {

    signup,
    login,
   

}