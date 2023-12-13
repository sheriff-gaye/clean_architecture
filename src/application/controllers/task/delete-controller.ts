import { TaskRepositoryIml } from "../../../infrastructure/repository/task-repository"
import { DeletetTaskUseCase } from "../../use-cases/task/task-delete";
import { Request,Response } from "express";

export class  DeleteTasController{

    private readonly deleteTaskUseCase:DeletetTaskUseCase

    constructor(){
        const taskRepository=new TaskRepositoryIml();
        this.deleteTaskUseCase= new DeletetTaskUseCase(taskRepository);
    }


    async deleteBooks(req:Request,res:Response){

        try {
            const {id}=req.params
            await this.deleteTaskUseCase.execute(id);
            res.status(200).json({message:"Task Deleted Successfully"})
            
        } catch (error:any) {
            res.status(400).json({error:error.message})
            
        }
    }


}