import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PortalServicesModule} from './services.module';

@Injectable({
  providedIn: PortalServicesModule
})
export class UsersService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): any {
    return this.http.get(`${environment.api}/usuarios`);
  }

}
