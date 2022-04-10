interface IEnvConfig {
    http: number
    db: {
        namespace: string
        host: string
        port: number
    }
    security: {
        secreatKey: string
    }
}

export default IEnvConfig