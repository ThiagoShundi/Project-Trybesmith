import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/users.interface';

const secret = process.env.JWT_SECRET;

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '500min',
};

const createToken = (payload: IUser) => jwt.sign(payload, secret as string, JWT_CONFIG);

export default createToken;