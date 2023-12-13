import { TaskRepository } from "../../../domain/repository/task.repository";
import { TaskResponse } from "./request";


export class GetAllTaskUseCase{

    constructor(private taskRepository:TaskRepository){}

    async execute():Promise<TaskResponse>{

        const tasks= await this.taskRepository.getAll();
        return tasks
    }



}