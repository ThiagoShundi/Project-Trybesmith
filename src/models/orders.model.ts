import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(`
      SELECT
        id, user_id
      FROM Trybesmith.orders;
    `);
  return rows;
};

export default { getAllOrders };