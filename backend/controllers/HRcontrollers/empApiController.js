const EMP_USER = require('../../models/empUserModel')


const getAllEmp = async(req,res)=>{

    

try {

    const user_infos = await EMP_USER.find({})
    
    
   // delete Info[0]._doc.password
    console.log(user_infos)
    //delete Info._doc.password

    res.status(200).json(Info._doc)

} catch (error) {

    res.status(400).json({error:error.message})
    
}

}

const empSearchApi = async(req,res)=>{

const {id} = req.body

if(id){

try {

    const user_infos = await EMP_USER.findOne({_id:id})
    const Info= {...user_infos}
    delete Info._doc.password

    res.status(200).json(Info._doc)

} catch (error) {

    res.status(400).json({error:error.message})
    
}

}

}



module.exports = {

    empSearchApi,
    getAllEmp

}