import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  return res.status(200).json(orders);
};

export default { getAll };
