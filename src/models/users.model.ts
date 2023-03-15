import { IUser } from '../interfaces/users.interface';
import connection from './connection';

const createUser = async (user: IUser) => {
  const result = await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ? ,?)',
    [user.username, user.vocation, user.level, user.password],
  );
  return result;
};
  
export default { createUser };