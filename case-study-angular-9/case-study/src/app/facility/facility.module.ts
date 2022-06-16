import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityComponent} from './facility-list/facility.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FacilityComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
