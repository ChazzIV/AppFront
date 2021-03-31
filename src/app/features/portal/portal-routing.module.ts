import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortalComponent} from './portal.component';
import {CustomerComponent} from './commons/components/customer/customer.component';
import {CustomerFormComponent} from './commons/components/customer/customer-form/customer-form.component';
import {CategoryComponent} from './commons/components/category/category.component';
import {FormCategoryComponent} from './commons/components/category/form-category/form-category.component';
import {ProductsComponent} from './commons/components/products/products.component';
import {FormProductComponent} from './commons/components/products/form-product/form-product.component';
import {UsersComponent} from './commons/components/users/users.component';
import {FormUsersComponent} from './commons/components/users/form-users/form-users.component';
import {BranchComponent} from './commons/components/branch/branch.component';
import {FormBranchComponent} from './commons/components/branch/form-branch/form-branch.component';

// Servicios
import {AfterLoginService} from '../../shared/services/after-login.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PortalComponent},
      // Customers
      { path: 'customer', component: CustomerComponent, canActivate: [AfterLoginService] },
      { path: 'custormer-form', component: CustomerFormComponent, canActivate: [AfterLoginService] },
      { path: 'custormer-form/:id', component: CustomerFormComponent, canActivate: [AfterLoginService] },
      // Category
      { path: 'category', component: CategoryComponent, canActivate: [AfterLoginService] },
      { path: 'category-form', component: FormCategoryComponent, canActivate: [AfterLoginService] },
      { path: 'category-form/:id', component: FormCategoryComponent, canActivate: [AfterLoginService] },
      // Products
      { path: 'products', component: ProductsComponent, canActivate: [AfterLoginService] },
      { path: 'product-form', component: FormProductComponent, canActivate: [AfterLoginService] },
      { path: 'product-form/:id', component: FormProductComponent, canActivate: [AfterLoginService] },
      // Users
      { path: 'users', component: UsersComponent, canActivate: [AfterLoginService] },
      { path: 'users-form', component: FormUsersComponent, canActivate: [AfterLoginService] },
      { path: 'users-form/:id', component: FormUsersComponent, canActivate: [AfterLoginService] },
      // Branch
      { path: 'branch', component: BranchComponent, canActivate: [AfterLoginService] },
      { path: 'branch-form', component: FormBranchComponent, canActivate: [AfterLoginService] },
      { path: 'branch-form/:id', component: FormBranchComponent, canActivate: [AfterLoginService] },

      { path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
