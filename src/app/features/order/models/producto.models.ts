import {IPedido} from '../interfaces/pedido.interfaces';
import {Productos} from '../../portal/models/productos.model';
import {IProductoResponse} from '../interfaces/producto.interface';
import {Pedido} from './pedido.model';

export class Producto {
  id?: string;
  pedido_id: Pedido;
  products_id: Productos;
  articulo?: string;
  cantidad: string;
  precio_compra: number;
  subtotal: number;
  created_at?: string;
  updated_at?: string;
  
  
  constructor(data?: IProductoResponse){
    this.id = data?.id ? data.id : '';
    this.articulo = data?.articulo ? data.articulo : '';
    this.precio_compra = data?.precio_compra ? data.precio_compra : 0;
    this.subtotal = data?.subtotal ? data.subtotal : 0;
    this.created_at = data?.created_at ? data.created_at : '';
    this.updated_at = data?.updated_at ? data.updated_at : '';
  }
}
