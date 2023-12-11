import { UserRepositoryImp } from "../../../infrastructure/repository/user-repository";
import { UpdateUserUseCase } from "../../use-cases/user/user-update";
import { Request, Response } from "express";

export class UpdateUserController {

    private readonly updateUserUseCase: UpdateUserUseCase

    constructor() {
        const userRepository=new UserRepositoryImp();
        this.updateUserUseCase = new UpdateUserUseCase(userRepository);
    }


    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params
            const user = await this.updateUserUseCase.execute({ ...req.body, id })
            res.status(200).json(user);

        } catch (error: any) {
            res.status(400).json({ error: error.message })

        }
    }
}