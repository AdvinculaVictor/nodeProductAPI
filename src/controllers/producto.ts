import { Request, Response } from 'express';
import Producto from '../models/producto';

export const getProducts = async  (req: Request, res: Response ) => {
  const listProducts = await Producto.findAll()
  res.json({listProducts})
}

export const getProduct = async (req: Request, res: Response ) => {
  const { id } = req.params; //op2, op3
  const product = await Producto.findByPk(id);
  if(product){
    res.json(product);
  }else{
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`
    })
  }
  // res.json({
  //   msg: 'get Product',
  //   //id: req.params.id //op1
  //   //id: id //op2
  //   id //op3
  //})
}

export const deleteProduct = async (req: Request, res: Response ) => {
  const { id } = req.params; //op2, op3
  const product = await Producto.findByPk(id);
  if(!product) {
    res.status(404).json({
      msg:`No existe un producto con el id ${id}`
    })
  }else{
    await product.destroy();
    res.json({
      msg: `El producto fue eliminado con éxito.`
    })
  }
}

export const postProduct = async (req: Request, res: Response ) => {
  const { body } = req;
  try {
    await Producto.create(body);
    res.json({
      msg: `El producto fue agregado con éxito.`
    })
  } catch (error) {
    console.log(error);
    res.json({
      msg: `Ocurrió un error, comuniquese con soporte.`
    })
  }
}

export const updateProduct = async (req: Request, res: Response ) => {
  //id: req.params.id //op1
  const { id } = req.params; //op2, op3
  const { body } = req;
  const product = await Producto.findByPk(id);
  try {
    if(product){
      await product.update(body);
      res.json({
        msg:`El producto fue actualizado con éxito`
      })
    }else{
      res.status(404).json({
        msg:`No existe un producto con el id ${id}`
      })
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: `Ocurrió un error, comuniquese con soporte.`
    })
  }

  // res.json({
  //   msg: 'update Product',
  //   //id: request.params.id //op1
  //   id, //op2, op3
  //   body
  // })
}