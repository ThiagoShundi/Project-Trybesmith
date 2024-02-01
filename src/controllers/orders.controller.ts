import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  return res.status(200).json(orders);
};

const create = async (req: Request, res: Response) => {
  const orders = req.body;
  
  const result = await ordersService.createOrder(orders);

  return res.status(201).json({ result });
};

export default { getAll, create };
