import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProduct();
  return res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const product = req.body;

  const productCreated = await productsService.createProduct(product);

  return res.status(201).json(productCreated);
};

export default { getAll, create };