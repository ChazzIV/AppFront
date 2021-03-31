import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedComponentsModule} from '../../shared/components/components.module';
import { AdminComponent } from './admin.component';
import {AdminCommonsModule} from './commons/commons.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    SharedComponentsModule
  ]
})
export class AdminModule { }
