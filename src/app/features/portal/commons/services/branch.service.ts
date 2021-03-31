import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Sucursal} from '../../models/sucursal.model';
import {environment} from '../../../../../environments/environment';
import {PortalServicesModule} from './services.module';

@Injectable({
  providedIn: PortalServicesModule
})
export class BranchService {

  constructor(private http: HttpClient) { }


  obtenerSucursal(): any {
    return this.http.get(`${environment.api}/sucursal`);
  }

  guardarSucursal( sucursal: Sucursal): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.api}/sucursal`, sucursal, {headers});
  }

  putSucursal( sucursal ): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.api}/sucursal/` + sucursal.id, sucursal, {headers});
  }

  elminiarSucursal(id): any {
    return this.http.delete(`${environment.api}/sucursal/` + id);
  }


}
