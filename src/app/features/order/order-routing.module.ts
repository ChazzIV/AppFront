import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order.component';
import {CommandComponent} from './commons/components/command/command.component';

// Services
import {AfterLoginService} from '../../shared/services/after-login.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: OrderComponent},
      // Commands
      { path: 'command', component: CommandComponent, canActivate: [AfterLoginService] },
      { path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
