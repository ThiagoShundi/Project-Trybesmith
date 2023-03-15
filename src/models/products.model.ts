import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.interface';
import connection from './connection';

const getAllProduct = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
      SELECT
        id, name, amount
      FROM Trybesmith.products;
    `);
  return rows;
};

// const getByIdProduct = async (id: number) => {
//   const productById = await connection.execute(`
//         SELECT * FROM Trybesmith.products where id = ?;
//       `, [id]);
//   return productById;
// };

const createProduct = async (product: IProduct) => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<IProduct[] & ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return { id: insertId, name, amount };
};

export default { getAllProduct, createProduct };