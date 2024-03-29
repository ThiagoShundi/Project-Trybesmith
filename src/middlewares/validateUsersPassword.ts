import { NextFunction, Request, Response } from 'express';

export default function validateUsersPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(400)
      .json({ message: '"password" is required' });
  }
  
  if (typeof password !== 'string') {
    return res.status(422)
      .json({ message: '"password" must be a string' });
  }

  if (password.length < 9) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  return next();
}