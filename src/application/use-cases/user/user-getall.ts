import { UserRepository } from "../../../domain/repository/user-repository";
import { User } from '../../../domain/entity/user-entity';

export class GetAllUserUseCase{

    constructor(

        private userRepository:UserRepository
    ){}

    async execute():Promise<User []>{
        const users = await this.userRepository.getAll();
        return users

    }

    
}