import { User } from "../../domain/entity/user-entity";

export class UserMapper{

    public static toDB(user:User):any{
        return{
            id:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            password:user.password,
            email:user.email,
            gender:user.gender,
            dob:user.dob,
            createdAt:user.createdAt?.toISOString(),
            updatedAt:user.updatedAt?.toISOString()

        }
    }


    public static toEntity(user:any):User{
        return User.create ({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password:user.password,
            gender:user.gender,
            dob:user.dob,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt

        })
    }
}