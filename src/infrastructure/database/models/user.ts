
import mongoose, {  Schema, Model } from 'mongoose';
import { UserAttributes } from '../../../domain/entity/user-entity';

export class UserDocument extends Model<UserAttributes>  implements UserAttributes {}

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password:{type:String,required:true},
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);


