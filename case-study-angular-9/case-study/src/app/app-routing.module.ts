import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerComponent} from './customer/customer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FacilityComponent} from './facility/facility.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {ContractComponent} from './contract/contract.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home-page'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-update', component: CustomerUpdateComponent},
  {path: 'customer-update', component: CustomerUpdateComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-update', component: FacilityUpdateComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract-create', component: ContractCreateComponent},
  {path: 'facility', component: FacilityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
