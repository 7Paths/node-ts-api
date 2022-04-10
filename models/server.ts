
import express from "express"

// Import API routes
import userRoutes from '../routes/user'
import cors from "cors"


class Server {

    private app: express.Application
    private port: string
    private apiEndpoints = {
        users: "/api/users"

    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "8000"

        // Initializer methods
        this.middlewares()        
        this.routes() // Define API routes in express app
    }

    // Put express server to listen
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`)
        })
    }

    // Define API endpoints prefixes
    routes(){
        this.app.use(this.apiEndpoints.users, userRoutes)
    }

    middlewares(){
        // CORS
        this.app.use(cors())

        // Parse body request to JSON
        this.app.use(express.json())

        // Public folders
    }
}

export default Server