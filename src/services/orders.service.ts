import { IOrder } from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await OrderModel.getAllOrders();
  return orders;
};

const createOrder = async (order: IOrder) => {
  const products = await OrderModel.createOrder(order);

  return products;
};

export default { getAllOrders, createOrder };