import { UserRepositoryImp } from "../../../infrastructure/repository/user-repository";
import { CreateUserUseCase } from "../../use-cases/user/user-create";
import { GetAllUserUseCase } from "../../use-cases/user/user-getall";
import { Request,Response } from "express";


export class CreateUserController{

    private createUserUseCase:CreateUserUseCase

    constructor(){
        const userRepository=new UserRepositoryImp();
        this.createUserUseCase=new CreateUserUseCase(userRepository);
    }



    async createUsers(req:Request,res:Response){
        try {
            const user=await this.createUserUseCase.execute({...req.body});
            res.status(200).json(user);
        } catch (error:any) {
            res.status(500).json({error:error.message})
            
        }

    }
}