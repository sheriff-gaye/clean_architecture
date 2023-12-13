import { Task } from "../../domain/entity/task.entity"

export class TaskMapper{

    public static toDB(task:Task):any{
        return{
            id:task.id,
            title:task.title,
            description:task.description,
            isComplete:task.isComplete,
            createdAt:task.createdAt?.toISOString(),
            updatedAt:task.updatedAt?.toISOString()
        }
    }


    public static toEntity(task:any):Task{
        return Task.create ({
            id: task.id,
            title: task.title,
            description:task.description,
            isComplete:task.isComplete,
            createdAt:task.createdAt,
            updatedAt:task.updatedAt
        })
    }
}