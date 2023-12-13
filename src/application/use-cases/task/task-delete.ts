import { TaskRepository } from "../../../domain/repository/task.repository";

export class DeletetTaskUseCase{

    constructor(private readonly taskRepository:TaskRepository){}

    async execute(id:string):Promise<void>{
        return  await this.taskRepository.delete(id);
    }



}