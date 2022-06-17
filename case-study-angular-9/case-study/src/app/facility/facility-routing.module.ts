import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityListComponent} from './facility-list/facility-list.component';


const routes: Routes = [
  {path: 'list', component: FacilityListComponent},
  {path: 'create', component: FacilityCreateComponent},
  {path: 'update/:id', component: FacilityUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
