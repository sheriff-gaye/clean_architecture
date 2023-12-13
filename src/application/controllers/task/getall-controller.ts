import { TaskRepositoryIml } from "../../../infrastructure/repository/task-repository";
import { Request,Response } from "express";
import { GetAllTaskUseCase } from "../../use-cases/task/task.getall";

export class GetAllTaskController{
    private readonly  getallTaskUseCase:GetAllTaskUseCase

    constructor(){
        const taskRepository=new  TaskRepositoryIml();
        this.getallTaskUseCase = new GetAllTaskUseCase(taskRepository);
    }

    async createTask(req:Request,res:Response){

        try {
            const tasks=await this.getallTaskUseCase.execute();
            res.status(200).json(tasks);           
        } catch (error:any) {
            res.status(400).json({error:error.message});
            
        }
    }
}