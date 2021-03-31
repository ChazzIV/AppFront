import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../../auth/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent): void {
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home/login');


  }

}
