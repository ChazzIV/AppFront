import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import {OrderCommonsModule} from './commons/commons.module';
import {SharedComponentsModule} from '../../shared/components/components.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    OrderCommonsModule,
    SharedComponentsModule
  ]
})
export class OrderModule { }
