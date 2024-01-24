import { TaskRepositoryIml } from "../../../infrastructure/repository/task-repository";
import { UpdateTaskUseCase } from "../../use-cases/task/task-update";
import { Request,Response } from "express";
export class UpdateTaskController {

    private readonly updateTaskUseCase:UpdateTaskUseCase

    constructor(){
        const taskRepository=new TaskRepositoryIml();
        this.updateTaskUseCase=new UpdateTaskUseCase(taskRepository);
    }

    async updateTask(req:Request,res:Response){
        try {
            const {id}=req.params
            const task=await this.updateTaskUseCase.execute({...req.body,id});
            res.status(200).json(task);
        } catch (error:any) {
            res.status(400).json({message: error?.message})
            
        }
    }
}