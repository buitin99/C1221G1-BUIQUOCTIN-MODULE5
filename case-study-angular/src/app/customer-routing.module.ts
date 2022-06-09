import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";

const routes : Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-update', component: CustomerUpdateComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class CustomerRoutingModule { }
