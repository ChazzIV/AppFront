import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponentsModule} from './components/components.module';



@NgModule({
  declarations: [],
  exports: [
    AuthComponentsModule
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthCommonsModule { }
