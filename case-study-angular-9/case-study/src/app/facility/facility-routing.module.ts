import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityComponent} from './facility-list/facility.component';


const routes: Routes = [
  {path: 'list', component: FacilityComponent},
  {path: 'create', component: FacilityCreateComponent},
  {path: 'update/:serviceId', component: FacilityUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
