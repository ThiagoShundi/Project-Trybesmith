import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/users.interface';
import connection from './connection';

const verifyLogin = async (login: ILogin): Promise<IUser[]> => {
  const { username } = login;

  const [rows] = await connection.execute<RowDataPacket[] & IUser[]>(
    `
      SELECT * FROM Trybesmith.users WHERE username = ?;
    `,
    [username],
  );
  return rows;
};
  
export default { verifyLogin };