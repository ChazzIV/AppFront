import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponentsModule} from './components/components.module';
import {PortalServicesModule} from './services/services.module';



@NgModule({
  declarations: [],
  exports: [
    PortalComponentsModule,
    PortalServicesModule
  ],
  imports: [
    CommonModule
  ]
})
export class PortalCommonsModule { }
