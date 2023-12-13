import { Task } from "../entity/task.entity";

export interface TaskRepository{

    create(data:Task):Promise<Task>
    findById(id:string):Promise<Task | null>
    update(updateData:Task):Promise<Task | null>
    delete(id:string):Promise<void>
    getAll():Promise<Task[]>
}