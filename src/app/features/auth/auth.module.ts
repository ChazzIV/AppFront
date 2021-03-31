import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedComponentsModule} from '../../shared/components/components.module';
import {AuthComponent} from './auth.component';
import { HomeView } from './views/home/home.view';
import {AuthCommonsModule} from './commons/commons.module';



@NgModule({
  declarations: [AuthComponent, HomeView],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AuthRoutingModule,
    AuthCommonsModule
  ]
})
export class AuthModule { }
