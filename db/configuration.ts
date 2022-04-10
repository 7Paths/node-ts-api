

import mongoose from "mongoose"


class Configuration {
    private namespace: string
    private host: string

    constructor(namespace: string, host: string){
        this.namespace = namespace
        this.host = host
    }

    connect(){
        return new Promise((resolve, _) => {
            try {
                mongoose.connect( `mongodb://${this.host}/${this.namespace}`, () => {
                    return {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false
                    }
                })

                resolve({successful: true})
            } catch (error) {
                resolve({successful: false})
            }
        })
    }
}

export default Configuration