import { Task } from "../../../domain/entity/task.entity"

export type TaskRequest={
    title:string,
    description?:string,
    isComplete?:boolean
}

export type TaskResponse=Promise<Task| null | Task[]> | null 