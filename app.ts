
import dotenv from "dotenv"
import Server from "./api/server"
import DbBuilder from "./db/builder"


// configurate Dotenv
dotenv.config()

const executionEnv = process.env.NODE_EV || "development"
const dbBuilder = new DbBuilder(executionEnv)
dbBuilder.try()

const server = new Server
server.listen()
