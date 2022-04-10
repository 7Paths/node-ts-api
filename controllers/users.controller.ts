
import { Request, Response } from "express"



class UsersController{

    getUsers(request: Request, response: Response){
        response.json({
            message: "get users"
        })
    }

    getUser(request: Request, response: Response){
        response.json({
            message: "get user"
        })
    }

    postUser(request: Request, response: Response){
        const { body } = request

        response.json({
            body,
            msg: "post users"
        })
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