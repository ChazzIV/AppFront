import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandComponent } from './command/command.component';
import {SharedComponentsModule} from '../../../../shared/components/components.module';
import {SnotifyModule} from 'ng-snotify';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS = [
  CommandComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SnotifyModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class OrderComponentsModule { }
