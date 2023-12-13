import express from 'express';
import { CreateTaskController } from '../../application/controllers/task/create-controller';
import { GetAllTaskController } from '../../application/controllers/task/getall-controller';
import { UpdateTaskController } from '../../application/controllers/task/update-controller';
import { DeleteTasController } from '../../application/controllers/task/delete-controller';



export const taskRouter=express.Router();

const createTaskController=new CreateTaskController();
const getTaskController=new GetAllTaskController();
const updateTaskController=new UpdateTaskController();
const deleteTaskController=new DeleteTasController();

taskRouter.post('/task',(req,res)=>createTaskController.createTask(req,res));
taskRouter.get('/task', (req,res)=>getTaskController.createTask(req,res));
taskRouter.delete('/task/:id',(req,res)=>deleteTaskController.deleteBooks(req,res));
taskRouter.patch('/task/:id',(req,res)=>updateTaskController.updateTask(req,res));