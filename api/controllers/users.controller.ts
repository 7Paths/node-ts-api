
import { Request, Response } from "express"
import User from "../models/user"
import IUser from "../interfaces/user.interface"


class UsersController{

    getUsers(request: Request, response: Response){
        return response.json({
            message: "get users"
        })
    }

    getUser(request: Request, response: Response){
        return response.json({
            message: "get user"
        })
    }

    async postUser(request: Request, response: Response){
        const { user } = request.body

        try {
            let newUser = new User<IUser>(user)

            newUser.doPasswordsMatch()
            newUser.encryptPassword()
            newUser.save()

            return response.json({
                user: newUser,
                message: "user created successfully! :)"
            })
        } catch (error) {
            console.log(`Error :${error}`)
            return response.status(200).json({message: "error",error})
        }
    }

    putUser(request: Request, response: Response){
        const { id } = request.params
        const { body } = request

        response.json({
            id,
            body,
            msg: "get users"
        })
    }

    deleteUser(request: Request, response: Response){
        const { id } = request.params

        response.json({
            id,
            msg: "get users"
        })
    }
}

export default new UsersController()