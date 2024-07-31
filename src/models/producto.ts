import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Producto', {
  productoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'ProductoId',
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING
  },
  marca: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DOUBLE
  },
  stock: {
    type: DataTypes.NUMBER
  }
},{
  createdAt:false,
  updatedAt:false
})

export default Producto;