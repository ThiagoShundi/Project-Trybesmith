import { NextFunction, Request, Response } from 'express';

export default function validateLoginAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
 
  console.log('AMount:', amount);

  if (amount === undefined) {
    return res.status(400)
      .json({ message: '"amount" is required' });
  }
  
  if (typeof amount !== 'string') {
    return res.status(422)
      .json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  return next();
}
