import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContractComponent } from './contract/contract-list/contract.component';
import { CustomerComponent } from './customer/customer-list/customer.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './facility/facility-update/facility-update.component';
import {RouterModule} from '@angular/router';
import { CustomerTypeListComponent } from './customer/customer-type-list/customer-type-list.component';
import { FacilityTypeComponent } from './facility/facility-type/facility-type.component';
import { RentTypeComponent } from './facility/rent-type/rent-type.component';
import { FacilityDetailComponent } from './facility/facility-detail/facility-detail.component';
import { ModalComponent } from './modal/modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { DeleteFacilityComponent } from './model/delete-facility/delete-facility.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CustomerTypeListComponent,
    FacilityTypeComponent,
    RentTypeComponent,
    FacilityDetailComponent,
    ModalComponent,
    DeleteFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
