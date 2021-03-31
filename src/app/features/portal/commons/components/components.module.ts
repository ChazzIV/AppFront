import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {SharedComponentsModule} from '../../../../shared/components/components.module';
import {SnotifyModule} from 'ng-snotify';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { BranchComponent } from './branch/branch.component';
import { UsersComponent } from './users/users.component';
import { FormUsersComponent } from './users/form-users/form-users.component';
import { FormBranchComponent } from './branch/form-branch/form-branch.component';
import { FormCategoryComponent } from './category/form-category/form-category.component';
import { FormProductComponent } from './products/form-product/form-product.component';

const COMPONENTS = [
  CustomerComponent,
  CategoryComponent,
  ProductsComponent,
  CustomerFormComponent,
  BranchComponent,
  UsersComponent,
  FormUsersComponent,
  FormBranchComponent,
  FormCategoryComponent,
  FormProductComponent
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
export class PortalComponentsModule { }
