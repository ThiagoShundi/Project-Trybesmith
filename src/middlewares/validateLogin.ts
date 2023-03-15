import { NextFunction, Request, Response } from 'express';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
 
  if (username === undefined) {
    return res.status(400)
      .json({ message: '"username" is required' });
  }
  
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }

  return next();
}
