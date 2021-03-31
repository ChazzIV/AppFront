import {Categorias} from './categorias.model';

export interface Productos {
  id?: number;
  nombre: string;
  precio: number;
  created_at?: string;
  updated_at?: string;
  categoria_id: Categorias;

}
