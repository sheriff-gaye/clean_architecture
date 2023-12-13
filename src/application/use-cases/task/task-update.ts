import { TaskRepository } from "../../../domain/repository/task.repository";
import { TaskMapper } from "../../mappers/task-mapper";
import { TaskRequest, TaskResponse } from "./request";

export class UpdateTaskUseCase{

    constructor(private readonly taskRepository:TaskRepository){}

    async execute(request:TaskRequest):Promise<TaskResponse>{
        if(!request.id)throw new Error("Hello World");
        const findTask=await this.taskRepository.findById(request?.id);
        if (!findTask) throw new Error('Task Not Found');

        const mappedTask= TaskMapper.toEntity(request)
        const task=await this.taskRepository.update(TaskMapper.toDB(mappedTask));
        console.log(task);
        return TaskMapper.toEntity(task);



    }
}