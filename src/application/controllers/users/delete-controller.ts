import { UserRepositoryImp } from "../../../infrastructure/repository/user-repository";
import { DeleteUserUseCase } from "../../use-cases/user/user-delete";
import { Request,Response } from "express";

export class DeleteUserController {

    private deleteUserUseCase:DeleteUserUseCase

    constructor(){
        const userRepository=new UserRepositoryImp();
        this.deleteUserUseCase=new DeleteUserUseCase(userRepository);
    }

    async deleteUser(req:Request,res:Response){
        try {
            const {id}=req.params;
            await this.deleteUserUseCase.execute(id);
            res.json({message:"User Deleted Sucessfully"});
            
        } catch (error:any) {
            res.status(400).json({error:error.message})
            
        }
    }
}