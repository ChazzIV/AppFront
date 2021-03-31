import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RequestResetComponent} from './password/request-reset/request-reset.component';
import {ResponseResetComponent} from './password/response-reset/response-reset.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SnotifyModule} from 'ng-snotify';
import {SharedComponentsModule} from '../../../../shared/components/components.module';

const COMPONENTS = [
  LoginComponent,
  RequestResetComponent,
  ResponseResetComponent,
  SignupComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ]
})
export class AuthComponentsModule { }
