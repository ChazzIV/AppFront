import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalRoutingModule} from './portal-routing.module';
import {SharedComponentsModule} from '../../shared/components/components.module';
import { PortalComponent } from './portal.component';
import {PortalCommonsModule} from './commons/commons.module';



@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
    SharedComponentsModule
  ]
})
export class PortalModule { }
