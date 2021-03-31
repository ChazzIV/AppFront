import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../../../auth/services/jarwis.service';
import {TokenService} from '../../../../../auth/services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(private Jarwis: JarwisService,
              private token: TokenService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data): void {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/admin/users');
  }

  handleError(error): void{
    this.error = error.error.errors;
  }

}
