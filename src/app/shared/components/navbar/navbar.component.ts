import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../features/auth/services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../features/auth/services/token.service';

declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private Auth: AuthService,
              private router: Router,
              private token: TokenService) {
  }

  ngOnInit(): void{
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent): void {
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  abrirMenu(): void{
    $('#navbarDropdown').dropdown('show');
  }

}
