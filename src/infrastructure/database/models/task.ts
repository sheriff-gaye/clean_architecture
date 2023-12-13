import mongoose, { Model, Schema } from "mongoose";
import { TaskAttributes } from "../../../domain/entity/task.entity";


export class TaskDocument extends Model<TaskAttributes> implements TaskAttributes {

}

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isComplete: {
        type: Boolean,
        default:false,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

export const TaskModel=mongoose.model<TaskDocument>('Task', taskSchema);