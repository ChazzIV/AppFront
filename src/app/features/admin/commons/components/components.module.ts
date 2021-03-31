import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedComponentsModule} from '../../../../shared/components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {SnotifyModule} from 'ng-snotify';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS = [
  ProfileComponent,
  SettingsComponent,
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
export class AdminComponentsModule { }
