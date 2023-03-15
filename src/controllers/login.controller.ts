import { Request, Response } from 'express';
import loginService from '../services/login.service';
import createToken from '../auth/authFunctions';

const create = async (req: Request, res: Response) => {
  const login = req.body;
  
  const [result] = await loginService.verifyLogin(login);

  if (!result) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }   

  if (result.password !== login.password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }   

  const token = createToken(login);
  
  return res.status(200).json({ token });
};
  
export default { create };