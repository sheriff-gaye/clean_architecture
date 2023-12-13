import express from 'express';
import { userRouter } from './user.router';
import { taskRouter } from './task.router';



export const router=express.Router();


router.use('/', userRouter);
router.use('/' ,taskRouter)