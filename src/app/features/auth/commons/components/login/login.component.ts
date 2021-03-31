import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {JarwisService} from '../../../services/jarwis.service';
import {TokenService} from '../../../services/token.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;
  loading = false;

  constructor(private Jarwis: JarwisService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }

  handleResponse(data): void {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/profile');
  }

  handleError(error): void {
    this.error = error.error.error;
  }

  ejecutar(): void {
    this.loading = true;
    setTimeout( () => {
      this.loading = false;
    }, 3000);
  }

}
