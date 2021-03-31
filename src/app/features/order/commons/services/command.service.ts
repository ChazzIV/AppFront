import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Pedido} from '../../models/pedido.model';
import {OrderServicesModule} from './services.module';

@Injectable({
  providedIn: OrderServicesModule
})
export class CommandService {


  constructor(private http: HttpClient) { }


  obtenerCategorias(): any {
    return this.http.get(`${environment.api}/categorias`);
  }

  obtenerProductos(): any {
    return this.http.get(`${environment.api}/productos`);
  }


  obtenerPedido(): any {
    return this.http.get(`${environment.api}/pedido`);
  }

  guardarPedido( pedido: Pedido): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.api}/pedido`, pedido, {headers});
  }


}
