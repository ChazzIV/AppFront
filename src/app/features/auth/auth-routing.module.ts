import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import {AuthComponent} from './auth.component';
import {LoginComponent} from './commons/components/login/login.component';
import {SignupComponent} from './commons/components/signup/signup.component';
import {RequestResetComponent} from './commons/components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './commons/components/password/response-reset/response-reset.component';

// Servicios
import {BeforeLoginService} from '../../shared/services/before-login.service';
import {AfterLoginService} from '../../shared/services/after-login.service';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuthComponent},
      { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
      { path: 'signup', component: SignupComponent, canActivate: [AfterLoginService] },
      { path: 'request-password-reset', component: RequestResetComponent, canActivate: [BeforeLoginService] },
      { path: 'response-password-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService] },
      { path: '**', redirectTo: 'home', pathMatch: 'full'},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
