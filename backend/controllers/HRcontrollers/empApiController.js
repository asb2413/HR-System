const EMP_USER = require('../../models/empUserModel')

const getAllEmp = async(req,res)=>{

try {

    const user_infos = await EMP_USER.find().select({'password':0})
    
    res.status(200).json(user_infos)

} catch (error) {

    res.status(400).json({error:error.message})
    
}

}

const empSearchApi = async(req,res)=>{
    

const {data} = req.body

if(data){
    
try {

    
    const user_infos = await EMP_USER.findOne({...data})
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