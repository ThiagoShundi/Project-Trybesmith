import { Request, Response } from 'express';
import usersService from '../services/users.service';
import createToken from '../auth/authFunctions';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  
  await usersService.createUser(user);
  
  const token = createToken(user);

  return res.status(201).json({ token });
};
  
export default { create };