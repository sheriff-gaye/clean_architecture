import { User } from "../../domain/entity/user-entity";

export class UserMapper{

    public static toDB(user:User):any{
        return{
            id:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            gender:user.gender,
            dob:user.dob
        }
    }


    public static toEntity(user:any):User{
        return new User ({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            gender:user.gender,
            dob:user.dob
        })
    }
}