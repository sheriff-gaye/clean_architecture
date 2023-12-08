import express from 'express';
import { CreateUserController } from '../../application/controllers/users/create-controller';
import { GetAllUserController } from '../../application/controllers/users/getall-contrller';
import { DeleteUserController } from '../../application/controllers/users/delete-controller';
import { UpdateUserController } from '../../application/controllers/users/update-controller';


export const userRouter=express.Router();


const createUserController =new CreateUserController();
const getAllUserController=new GetAllUserController();
const deleteUserController=new DeleteUserController()
const updateUserController=new UpdateUserController();

userRouter.post('/user',(req,res)=> createUserController.createUsers(req,res));
userRouter.get('/user',(req,res)=>getAllUserController.getUsers(req,res));
userRouter.delete('/user/:id',(req,res)=>deleteUserController.deleteUser(req,res));
userRouter.patch('/user/:id',(req,res)=>updateUserController.updateUser(req,res));