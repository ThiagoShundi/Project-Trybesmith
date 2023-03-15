import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(`
  SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;

    `);  
  console.log(rows);

  return rows;
};

export default { getAllOrders };