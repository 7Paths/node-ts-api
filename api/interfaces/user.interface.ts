interface IUser {
    email: string
    password: string
    passwordConfirmation?:  string
    active: boolean
    firstname: string,
    lastname: string,
    gender: string,
    deletedAt?: string,

    doPasswordsMatch(): any
    encryptPassword(): any
}

export default IUser