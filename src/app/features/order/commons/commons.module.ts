import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponentsModule} from './components/components.module';
import {OrderServicesModule} from './services/services.module';



@NgModule({
  declarations: [],
  exports: [
    OrderComponentsModule,
    OrderServicesModule
  ],
  imports: [
    CommonModule
  ]
})
export class OrderCommonsModule { }
