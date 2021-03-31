import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {SettingsComponent} from './commons/components/settings/settings.component';
import {ProfileComponent} from './commons/components/profile/profile.component';

// Servicios
import {AfterLoginService} from '../../shared/services/after-login.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AdminComponent},
      { path: 'settings', component: SettingsComponent, canActivate: [AfterLoginService] },
      { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
      { path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
