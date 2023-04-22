const EMP_USER = require('../../models/empUserModel')

//addEmp controller
const addEmp = async (req,res)=>{

        //taking post data from body
        const {
            
               username,
               password,
               email,
               phone,
               identity,
               age,
               gender,
               nationality,
               job,
               name,
               birthDate,
               address,
               degree,
               department,
               supervisor,
               workLocation,
               salary,
               emergencyPhone
            
            } = req.body
        
        try {
            
            const emp_user = await EMP_USER.signup(
                username,
                password,
                email,
                phone,
                identity,
                age,
                gender,
                nationality,
                job,
                name,
                birthDate,
                address,
                degree,
                department,
                supervisor,
                workLocation,
                salary,
                emergencyPhone
                )

            const user_id = emp_user._id   
            res.status(200).json({user_id})
            req.id=user_id

        } catch (error) {

            res.status(400).json({error:error.message})

        }
}

module.exports = {

    addEmp

}