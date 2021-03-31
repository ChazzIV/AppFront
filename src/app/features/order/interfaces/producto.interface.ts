import {IPedido} from './pedido.interfaces';
import {Productos} from '../../portal/models/productos.model';

export interface IProductoResponse {
  id?: string;
  pedido_id: IPedido;
  products_id: Productos;
  articulo?: string;
  cantidad: string;
  precio_compra: number;
  subtotal: number;
  created_at?: string;
  updated_at?: string;
}
