import { IProduct } from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

const getAllProduct = async (): Promise<IProduct[]> => {
  const prodcuts = await ProductModel.getAllProduct();
  return prodcuts;
};

const createProduct = async (product: IProduct) => {
  const products = await ProductModel.createProduct(product);

  return products;
};
  
export default { getAllProduct, createProduct };