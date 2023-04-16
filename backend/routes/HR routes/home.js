const express = require('express')
const homeRouter = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

//controllers
const requireAuth = require('../../middleware/requireAuth')
const {home} = require('../../controllers/HRcontrollers/homeController')
const {addEmp} = require('../../controllers/HRcontrollers/empUserController')
const {empUploads} = require('../../controllers/HRcontrollers/empUploadsController')
const {myProfile} = require('../../controllers/HRcontrollers/myProfileController')
const {empApi} = require('../../controllers/HRcontrollers/empApiController')



//middleware
homeRouter.use(requireAuth)

//home page
homeRouter.post('/',home)

//add new emp
homeRouter.post('/addEmp',addEmp)
//emp uploads (photo,contract)
homeRouter.post('/addEmpUploads',upload.any(),empUploads)
//HR profile get info api
homeRouter.post('/myProfile',myProfile)
//employee api for all infos 
homeRouter.post('/employee',empApi)


module.exports = homeRouter


