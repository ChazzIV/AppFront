import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PortalServicesModule} from './services.module';

import {environment} from '../../../../../environments/environment';PortalServicesModule
import {Clientes} from '../../models/clientes.model';

@Injectable({
  providedIn: PortalServicesModule
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  obtenerCliente(): any {
    return this.http.get(`${environment.api}/clientes`);
  }

  guardar( clientes: Clientes): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.api}/clientes/`, clientes, {headers});
  }

  put( clientes): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.api}/clientes/` + clientes.id, clientes, {headers});
  }

  elminiarCliente(id): any {
    return this.http.delete(`${environment.api}/clientes/` + id);
  }

}
