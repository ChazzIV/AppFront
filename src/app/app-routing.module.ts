import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  { path: 'admin', loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)},
  { path: 'admin', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule)},
  { path: '**', pathMatch: 'full' , redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
