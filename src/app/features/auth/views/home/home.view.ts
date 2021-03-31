import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.css']
})
export class HomeView implements OnInit {
  public loggedIn: boolean;

  constructor(private Auth: AuthService,
              private router: Router,
              private token: TokenService) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    console.log('Hola');
  }


}
