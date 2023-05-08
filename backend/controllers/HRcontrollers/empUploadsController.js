const fs = require("fs");

const empUploads = (req, res) => {
  const { id } = req.body;
  const user_id = JSON.parse(id);
 
  //rename the upload photo, make it depend on user id
  if (req.files) {
    try {
      let photoFileType = req.files[0].mimetype.split("/")[1];
      let photoNewFileName = user_id.user_id + "." + photoFileType;
      fs.rename(
        `./uploads/${req.files[0].filename}`,
        `./uploads/${photoNewFileName}`,
        () => {
          ''
        }
      );
  
      let contractFileType = req.files[1].mimetype.split("/")[1];
      let contractNewFileName = user_id.user_id + "." + contractFileType;
      fs.rename(
        `./uploads/${req.files[1].filename}`,
        `./uploads/${contractNewFileName}`,
        () => {''
        }
      );
      
        
        res.status(200).json({msg:'done'});
      
      
    } catch (error) {
      
      res.json(error)

    }
  
    
  }
};

module.exports = {
  empUploads,
};
