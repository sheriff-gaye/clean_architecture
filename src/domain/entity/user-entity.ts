export interface UserAttributes {
    id: string;
    firstname: string
    lastname: string
    email: string
    gender: string
    dob: Date

}

export class User {
    private _id: string
    private _firstname: string
    private _lastname: string
    private _email: string
    private _gender: string
    private _dob: Date


    constructor(props: UserAttributes) {
        this._id = props.id
        this._firstname = props.firstname
        this._lastname = props.lastname
        this._email = props.email
        this._gender = props.gender
        this._dob = props.dob
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
    public static create(props: UserAttributes): User {
        return new User({ ...props })
    }

    toJSON():UserAttributes{
        return{
            id:this._id,
            firstname:this._firstname,
            lastname:this._lastname,
            email:this._email,
            gender:this._gender,
            dob:this._dob

        }
    }
}