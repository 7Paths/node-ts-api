
// Rename this file as production, development or testing, according with your env

export default {
    http: 8000,
    db: {
        namespace: "zoe-dev",
        host: "localhost",
        port: 27017
    },
    security: {
        secretKey: "YOUR_SECRET_KEY"
    }
}