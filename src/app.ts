import express from 'express';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import ordersController from './controllers/orders.controller';
import loginController from './controllers/login.controller';
import validateLogin from './middlewares/validateLogin';
import validateProductsName from './middlewares/validateProductsName';
import validateProductsAmount from './middlewares/validateProductsAmount';
import validateUsersUsername from './middlewares/validateUsersUsername';
import validateUsersVocation from './middlewares/validateUsersVocation';
import validateUsersLevel from './middlewares/validateUsersLevel';
import validateUsersPassword from './middlewares/validateUsersPassword';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', validateProductsName, validateProductsAmount, productsController.create);

app.post(
  '/users', 
  validateUsersUsername, 
  validateUsersVocation,
  validateUsersLevel, 
  validateUsersPassword, 
  usersController.create,
);

app.get('/orders', ordersController.getAll);

app.post('/orders', ordersController.create);

app.post('/login', validateLogin, loginController.create);

export default app;
