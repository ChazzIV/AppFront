import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categorias} from '../../models/categorias.model';
import {environment} from '../../../../../environments/environment';
import {PortalServicesModule} from './services.module';

@Injectable({
  providedIn: PortalServicesModule
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  obtenerCategoria(): any {
    return this.http.get(`${environment.api}/categorias`);
  }

  guardarCategoria( categorias: Categorias): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.api}/categorias`, categorias, {headers});
  }

  put( categorias ): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.api}/categorias/` + categorias.id, categorias, {headers});
  }

  elminiarCategoria(id): any {
    return this.http.delete(`${environment.api}/categorias/` + id);
  }

}
