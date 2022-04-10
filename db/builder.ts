
import Configuration from './configuration';
import IEnvConfig from "../api/interfaces/env.configuration"
import path from "path"

class DbBuilder {

    private env: string
    private envConf: IEnvConfig
    

    constructor(env: string){
        this.env = env
        this.envConf = require( path.join(process.env.PWD || "../", `/config/${this.env}.ts`) )
    }

    async try(){
        if(!this.envConf.db){
            console.error("Enviroment file does not exists")
        }

        let { namespace, host } = this.envConf.db

        let database = new Configuration(namespace, host)

        await database.connect()
        console.log(database)
    }
}

export default DbBuilder



