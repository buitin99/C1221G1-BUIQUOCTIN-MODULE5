import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { FacilityUpdateComponent } from './facility-update/facility-update.component';
import {RouterModule} from '@angular/router';
import { CustomerTypeListComponent } from './customer/customer-type-list/customer-type-list.component';
import { FacilityTypeComponent } from './facility/facility-type/facility-type.component';
import { RentTypeComponent } from './facility/rent-type/rent-type.component';
import { FacilityDetailComponent } from './facility/facility-detail/facility-detail.component';
import { ModalComponent } from './modal/modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContractComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    FacilityComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    CustomerTypeListComponent,
    FacilityTypeComponent,
    RentTypeComponent,
    FacilityDetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
