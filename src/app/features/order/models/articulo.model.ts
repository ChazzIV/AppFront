import {Pedido} from './pedido.model';
import {Productos} from '../../portal/models/productos.model';
import {IProductoResponse} from '../interfaces/producto.interface';

export interface Articulo {
  id?: number;
  pedido_id: Pedido;
  products_id: Productos;
  articulo?: string;
  cantidad: string;
  precio_compra: string;
  subtotal: string;
  created_at?: string;
  updated_at?: string;


}
