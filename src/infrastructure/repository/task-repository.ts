import { TaskMapper } from '../../application/mappers/task-mapper';
import { Task } from '../../domain/entity/task.entity';
import { TaskRepository } from '../../domain/repository/task.repository';
import { TaskModel } from '../database/models/task';


export class TaskRepositoryIml implements TaskRepository{
    async create(data: Task): Promise<Task> {
        
        const  task=await TaskModel.create(TaskMapper.toDB(data));
        return TaskMapper.toEntity(task);
    }
   async  findById(id: string): Promise<Task | null> {
        const task=await TaskModel.findById(id);
        return TaskMapper.toEntity(task);
    }
    async update(updateData: Task): Promise<Task | null> {
        const task=await TaskModel.findById(updateData.id);

        if(!task) throw new Error ("Task Not Found");

        const newTask=await TaskModel.updateOne(TaskMapper.toDB(updateData));
        return TaskMapper.toEntity(newTask);

    }
    async delete(id: string): Promise<void> {
        await TaskModel.findByIdAndDelete({ _id: id });
        
    }
    async getAll(): Promise<Task[]> {
        const tasks=await TaskModel.find();
        return tasks.map((task)=>TaskMapper.toEntity(task))
    }

}