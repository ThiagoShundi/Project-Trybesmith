import { IUser } from '../interfaces/users.interface';
import UserModel from '../models/users.model';

const createUser = async (user: IUser) => {
  const users = await UserModel.createUser(user);

  return users;
};
  
export default { createUser };