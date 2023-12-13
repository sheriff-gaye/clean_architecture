import express from 'express';
import { CreateTaskController } from '../../application/controllers/task/create-controller';
import { GetAllTaskController } from '../../application/controllers/task/getall-controller';



export const taskRouter=express.Router();


const createTaskController=new CreateTaskController();
const getTaskController=new GetAllTaskController();

taskRouter.post('/task',(req,res)=>createTaskController.createTask(req,res));
taskRouter.get('/task', (req,res)=>getTaskController.createTask(req,res));