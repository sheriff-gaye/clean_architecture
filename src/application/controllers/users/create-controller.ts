import { UserRepositoryImp } from "../../../infrastructure/repository/user-repository";
import { CreateUserUseCase } from "../../use-cases/user/user-create";
import { Request,Response } from "express";
import { EmailService } from '../../../infrastructure/services/email-service';


export class CreateUserController{

    private createUserUseCase:CreateUserUseCase
    

    constructor(){
        const emailService = new EmailService();
        const userRepository=new UserRepositoryImp(emailService);
        this.createUserUseCase=new CreateUserUseCase(userRepository);
    }



    async createUsers(req:Request,res:Response){
        try {
            const user=await this.createUserUseCase.execute({...req.body});
            res.status(200).json(user);
        } catch (error:any) {
            res.status(400).json({error:error.message})
            
        }

    }
}