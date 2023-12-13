import { TaskRepositoryIml } from "../../../infrastructure/repository/task-repository";
import { CreateTaskUseCase } from "../../use-cases/task/task-create";
import { Request, Response } from "express";

export class CreateTaskController {
    private readonly createTaskUseCase: CreateTaskUseCase

    constructor() {
        const taskRepository = new TaskRepositoryIml();
        this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
    }

    async createTask(req: Request, res: Response) {

        try {
            const tasks = await this.createTaskUseCase.execute({ ...req.body });
            res.status(200).json(tasks);


        } catch (error: any) {
            res.status(400).json({ error: error.message });

        }
    }
}