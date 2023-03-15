import express from 'express';
import productsController from './controllers/products.controller';
import usersController from './controllers/users.controller';
import ordersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.create);

app.post('/users', usersController.create);

app.get('/orders', ordersController.getAll);

export default app;
