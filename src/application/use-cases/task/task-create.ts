import { TaskRepository } from "../../../domain/repository/task.repository";
import { TaskMapper } from "../../mappers/task-mapper";
import { TaskRequest, TaskResponse } from "./request";


export class CreateTaskUseCase{

    constructor(private taskRepository:TaskRepository){}


    async execute(request: TaskRequest):Promise<TaskResponse>{

        const task= TaskMapper.toEntity(request);
        return await this.taskRepository.create(task);
    }



}