import express from 'express';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import ordersController from './controllers/orders.controller';
import loginController from './controllers/login.controller';
import validateLogin from './middlewares/validateLogin';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.create);

app.post('/users', usersController.create);

app.get('/orders', ordersController.getAll);

app.post('/login', validateLogin, loginController.create);

export default app;
