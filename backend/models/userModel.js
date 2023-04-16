const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcrypt')



// creating userSchema for login and signup
const userSchema = new mongoose.Schema({

    username:{

        type:String,
        required:true,
        unique: true

    },

    password:{

        type:String,
        required:true

    },

    email:{

        type:String,
        required:true,
        unique: true

    },

    phone:{

        type:String,
        required:true,
        unique: true

    },

    name:{

        type:String,
        required:true,

    }
    

    ,

    identity:{

        type:String,
        required:true,
        unique: true

    },

    age:{

        type:Number,
        required:true,

    },

    gender:{

        type:String,
        required:true,

    },

    nationality:{

        type:String,
        required:true,

    },

    job:{

        type:String,
        required:true,

    },
    
    

   



},{timestamps:true})

//creating static function for validat,hash,and create user in db
userSchema.statics.signup = async function(

    username,
    password,
    email,
    phone,
    identity,
    age,
    gender,
    nationality,
    job,
    name



){

    //check if user exsit by username, phone and email
    const usernameExsits = await this.findOne({username})
    if(usernameExsits){

        throw Error('user alredy signed up')

    }

    const phoneExsits = await this.findOne({phone})
    if(phoneExsits){

        throw Error('user alredy signed up')

    }

    const emailExsits = await this.findOne({email})
    if(emailExsits){

        throw Error('user alredy signed up')

    }

  
//check if empty
    if(! username || !password || !email || !phone || !identity || !age || !gender || !nationality || !job || !name){

        throw Error("all fileds must be filled")

    }

//validation
    if(!validator.isEmail(email)){

        throw Error('email incorrect')

    }

    if(!validator.isStrongPassword(password)){

        throw Error('The password is not strong') 

    }

    //hashing the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    //create user
    const user = await this.create({username, password: hash,email,phone,name,identity,age,gender,nationality,job})

    return user


}

//static function for login like login
userSchema.statics.login = async function(username,password){

    if(!username || !password){

        throw Error('All fillds must be filled')

    }

    const user = await this.findOne({username})
    if(!user){

        throw Error('Incorrect username')

    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){

        throw Error('Incorrect password')

    }

    return user

}

module.exports = mongoose.model('HR_USER', userSchema)