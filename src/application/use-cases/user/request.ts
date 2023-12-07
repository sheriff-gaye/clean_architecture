import { User } from "../../../domain/entity/user-entity";

export type UserResponse=Promise <User> | null


export type UserRequest={
    id?:string,
    firstname:string,
    lastname:string,
    gender:string,
    dob:Date,
    email:string
}