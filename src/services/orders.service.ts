import { IOrder } from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.getAllOrders();
  return orders;
};

export default { getAllOrders };