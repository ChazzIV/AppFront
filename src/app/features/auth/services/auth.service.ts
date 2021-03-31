import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import {BehaviorSubject} from 'rxjs';

@Injectable()

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean): any{
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }

}

