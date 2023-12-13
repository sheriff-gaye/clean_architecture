import { TaskMapper } from '../../application/mappers/task-mapper';
import { Task } from '../../domain/entity/task.entity';
import { TaskRepository } from '../../domain/repository/task.repository';
import { TaskModel } from '../database/models/task';


export class TaskRepositoryIml implements TaskRepository{
    async create(data: Task): Promise<Task> {
        
        const  task=await TaskModel.create(TaskMapper.toDB(data));
        return TaskMapper.toEntity(task);
    }
    findById(id: string): Promise<Task | null> {
        throw new Error('Method not implemented.');
    }
    update(updateData: Task): Promise<Task | null> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async getAll(): Promise<Task[]> {
        const tasks=await TaskModel.find();
        return tasks.map((task)=>TaskMapper.toEntity(task))
    }

}