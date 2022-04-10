

import { Schema, model } from "mongoose"
import IUser from "../interfaces/user.interface"
import bcrypt from "bcrypt"

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    passwordConfirmation: {
        type: String
    },

    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },

    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },

    gender: {
        type: String,
        required: [true, "Gender is required"],
        enum: ["male", "female"]
    },

    active: {
        type: Boolean,
        default: true
    },

    deletedAt: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})



// Returns Boolean
// Description: used to validate if the password valid
userSchema.methods.isPasswordValid = function(password: string){
    return (bcrypt.compareSync(password, this.password))
}


// Returns void
// Description: used to encrypt user's password
userSchema.methods.encryptPassword = async function(){
    try {
        let salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

// Returns boolean
// Description: validate if password and passwordConfirmation field do match
userSchema.methods.doPasswordsMatch = function(){
    return this.password === this.passwordConfirmation
}

// Returns fullname
// Description: used to get the fullname
userSchema.methods.fullname = function(){
    return `${this.firstname}${this.lastname}`
}

export default model("user", userSchema)