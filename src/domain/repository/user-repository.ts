import { User } from '../entity/user-entity';

export interface UserRepository{
    register(data: User): Promise<User>
    findById(id: string): Promise<User | null>
    update(updateData: User): Promise<User | null>
    delete(id: string): Promise<void>
    getAll(): Promise<User[]>

}