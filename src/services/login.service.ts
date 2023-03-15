import { ILogin } from '../interfaces/login.interface';
import LoginModel from '../models/login.model';

const verifyLogin = async (login: ILogin) => {
  const logins = await LoginModel.verifyLogin(login);

  return logins;
};
  
export default { verifyLogin };