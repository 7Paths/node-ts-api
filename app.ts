
import dotenv from "dotenv"
import Server from './models/server';

// configurate Dotenv
dotenv.config()

const server = new Server
server.listen()
