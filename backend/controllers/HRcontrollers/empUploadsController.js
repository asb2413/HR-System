const fs = require('fs');

const empUploads = (req,res)=>{
    
    
    const {id}= req.body
    const user_id = JSON.parse(id)
    
    

            //rename the upload photo, make it depend on user id
            //photo is not required
            if(req.files){
               
                
                    
                    let photoFileType = req.files[0].mimetype.split('/')[1]
                    let photoNewFileName = user_id.user_id +'.'+ photoFileType
                    fs.rename(`./uploads/${req.files[0].filename}`,`./uploads/${photoNewFileName}`,()=>{console.log('photo upluad done')})


                    let contractFileType = req.files[1].mimetype.split('/')[1]
                    let contractNewFileName = user_id.user_id +'.'+ contractFileType
                    fs.rename(`./uploads/${req.files[1].filename}`,`./uploads/${contractNewFileName}`,()=>{console.log('contract upload done')})
                    res.status(200)

            
                  
                }

}



module.exports = {

    empUploads

}