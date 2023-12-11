import { UserRepositoryImp } from "../../../infrastructure/repository/user-repository";
import { GetAllUserUseCase } from "../../use-cases/user/user-getall";
import { Request,Response } from "express";

export class GetAllUserController{

    private getallUserUseCase:GetAllUserUseCase

    constructor(){
       
        const userRepository=new UserRepositoryImp();
        this.getallUserUseCase=new GetAllUserUseCase(userRepository);
    }


    async getUsers(req:Request,res:Response){
        try {
            const user=await this.getallUserUseCase.execute();
            res.status(200).json(user);
        } catch (error:any) {
            res.status(500).json({error:error.message})
            
        }

    }
}