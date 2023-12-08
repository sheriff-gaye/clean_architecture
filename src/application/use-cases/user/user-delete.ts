import { UserRepository } from "../../../domain/repository/user-repository";


export class DeleteUserUseCase{

    constructor(private userRepository:UserRepository){}

    async execute(id:string):Promise<void>{
       
        return await this.userRepository.delete(id);
       
    }
}