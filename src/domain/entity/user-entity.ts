import bcrypt from "bcrypt"

export interface UserAttributes {
    id: string;
    firstname: string
    lastname: string
    email: string
    gender: string
    dob: Date
    password: string
    createdAt?: string
    updatedAt?: string

}

export class User {
    private _id: string
    private _firstname: string
    private _lastname: string
    private _email: string
    private _gender: string
    private _dob: Date
    private _password: string
    private _createdAt?: Date
    private _updatedAt?: Date


    constructor(props: UserAttributes) {
        this._id = props.id
        this._firstname = props.firstname
        this._lastname = props.lastname
        this._email = props.email
        this._gender = props.gender
        this._dob = props.dob
        this._password = props.password
        this._createdAt = props.createdAt ? new Date(props.createdAt) : undefined
        this._updatedAt = props.updatedAt ? new Date(props.updatedAt) : undefined
    }

    get id(): string {
        return this._id
    }
    get firstname(): string {
        return this._firstname
    }

    get lastname(): string {
        return this._lastname
    }

    get gender(): string {
        return this._gender
    }

    get email(): string {
        return this._email
    }
    get dob(): Date {
        return this._dob
    }
    get createdAt(): Date {
        return this._createdAt!
    }
    get updatedAt(): Date {
        return this._updatedAt!
    }

    get password(): string {
        return this._password
    }

    async setPassword(password: string): Promise<void> {
        this._password = await bcrypt.hash(password, 9);
        
    }

    verifyPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
    public static create(props: UserAttributes): User {
        return new User({ ...props })
    }

    toJSON(): UserAttributes {
        return {
            id: this._id,
            firstname: this._firstname,
            lastname: this._lastname,
            email: this._email,
            gender: this._gender,
            dob: this._dob,
            password: this._password,
            createdAt: this._createdAt?.toISOString(),
            updatedAt: this._updatedAt?.toISOString()

        }
    }
}