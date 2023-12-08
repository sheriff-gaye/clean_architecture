import { UserRepository } from "../../../domain/repository/user-repository";
import { UserMapper } from "../../mappers/user-mapper";
import { UserRequest, UserResponse } from "./request";


export class UpdateUserUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async execute(request: UserRequest): Promise<UserResponse> {

        if (!request.id) throw new Error("Id is Required");
        const user = await this.userRepository.findById(request.id);
        if (!user) throw new Error("User Not Found");
        const mappedUser = UserMapper.toEntity(request);
        return await this.userRepository.update(UserMapper.toDB(mappedUser));
    }
}