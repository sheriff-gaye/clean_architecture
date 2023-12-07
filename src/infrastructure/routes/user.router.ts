import express from 'express';
import { CreateUserController } from '../../application/controllers/users/create-controller';
import { GetAllUserController } from '../../application/controllers/users/getall-contrller';


export const userRouter=express.Router();


const createUserController =new CreateUserController();
const getAllUserController=new GetAllUserController();

userRouter.post('/user',(req,res)=> createUserController.createUsers(req,res));
userRouter.get('/user',(req,res)=>getAllUserController.getUsers(req,res));