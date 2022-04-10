
import express from "express"

// Import API routes
import routes from './routes'
import cors from "cors"

import morgan from "morgan"
import helmet from "helmet"

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
        this.mountRoutes()
    }

    // Put express server to listen
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`)
        })
    }

    // Define API endpoints prefixes
    mountRoutes(){
        this.app.use(this.apiEndpoints.users, routes.userRoutes)
    }

    middlewares(){
        // CORS
        this.app.use(cors())

        // Protect API server
        this.app.use( helmet() )

        // Parse body request to JSON
        this.app.use(express.json())

        // Requests logger
        this.app.use( morgan("combined") )
    }
}

export default Server