import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Productos} from '../../models/productos.model';
import {environment} from '../../../../../environments/environment';
import {PortalServicesModule} from './services.module';

@Injectable({
  providedIn: PortalServicesModule
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  obtenerCategorias(): any {
    return this.http.get(`${environment.api}/categorias`);
  }


  obtenerProducto(): any {
    return this.http.get(`${environment.api}/productos`);
  }

  guardarProducto( productos: Productos): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.api}/productos`, productos, {headers});
  }

  putProducto( productos ): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.api}/productos/` + productos.id, productos, {headers});
  }

  elminiarProducto(id): any {
    return this.http.delete(`${environment.api}/productos/` + id);
  }


}
