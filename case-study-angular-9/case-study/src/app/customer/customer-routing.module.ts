import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer-list/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';


const routes: Routes = [
  {path: 'list', component: CustomerComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'update/:id', component: CustomerUpdateComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
