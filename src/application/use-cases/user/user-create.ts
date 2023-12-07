import { UserRepository } from "../../../domain/repository/user-repository";
import { UserMapper } from "../../mappers/user-mapper";
import { UserRequest, UserResponse } from "./request";

export class CreateUserUseCase{
    constructor(private userRepository:UserRepository){}


    async execute(request:UserRequest):Promise<UserResponse>{
        const user=UserMapper.toEntity(request);
        return await this.userRepository.register(user);
    }
}