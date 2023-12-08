import { UserMapper } from "../../application/mappers/user-mapper";
import { User } from "../../domain/entity/user-entity";
import { UserRepository } from "../../domain/repository/user-repository";
import { UserModel } from '../database/models/user';

export class UserRepositoryImp implements UserRepository {

    async register(data: User): Promise<User> {
        const existingUser = await UserModel.findOne({ email: data.email });

        if (existingUser) throw new Error('Email already in use');
        const MappedUser =  UserMapper.toEntity(data);
        await MappedUser.setPassword(data.password)
        const newUser = await UserModel.create(UserMapper.toDB(MappedUser));

        return UserMapper.toEntity(newUser);
    }
    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findById(id);
        return UserMapper.toEntity(user);

    }
    async update(updateData: User): Promise<User | null> {
       const existingUser=await UserModel.findById(updateData.id);

       if(!existingUser) throw new Error('User not found');
       const mappedUser=UserMapper.toEntity(updateData);
       await mappedUser.setPassword(updateData.password);
       await UserModel.updateOne(UserMapper.toDB(mappedUser));
       return UserMapper.toEntity(mappedUser);
    }
    async delete(id: string): Promise<void> {
        await UserModel.findOneAndDelete({ _id: id });

    }
    async getAll(): Promise<User[]> {
        const users = await UserModel.find();
        return users.map((user) => UserMapper.toEntity(user));
    }

}