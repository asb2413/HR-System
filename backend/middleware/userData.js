const jwt = require('jsonwebtoken')
const HR_USER = require('../models/userModel')
const requireAuth = async(req,res,next)=>{

    //verify auth
    const {authorization} = req.headers

    if(authorization){

        const token = authorization.split(' ')[1]

    try{

       const {_id} = jwt.verify(token,process.env.JWT_PASSWORD)
       const user = await HR_USER.findOne({_id}).select('_id')
       res.status(200).json(user)
       next()

    }catch(error){

        console.log(error)
        res.status(401).json({error:'requist is not auth'})

    }

    }

    

    

}


module.exports = requireAuth