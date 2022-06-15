import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';
import {RentType} from '../model/rent-type';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facility: Facility[] = [{serviceId: 1, serviceName: 'Villa-Vip', serviceArea: 200
    , serviceCost: 500, serviceMaxPeople: 5, standardRoom: 'Vip', descriptionOtherConvenience: 'Tivi + Tủ lạnh', poolArea: 200,
    numberOfFloor: 3, facilityType: {
    id: 1,
      type: 'Villa'}, rentType: {
    id: 1,
      type: 'Day'
    }},
    {serviceId: 2, serviceName: 'House-Vip', serviceArea: 300
      , serviceCost: 600, serviceMaxPeople: 10, standardRoom: 'Vip', descriptionOtherConvenience: 'Tivi + máy lạnh', poolArea: 400,
      numberOfFloor: 4, facilityType: {
        id: 2,
        type: 'House'}, rentType: {
        id: 2,
        type: 'Month'
      }},
    {serviceId: 3, serviceName: 'Room-Vip', serviceArea: 700
      , serviceCost: 1000, serviceMaxPeople: 12, standardRoom: 'Vip', descriptionOtherConvenience: 'máy giặc + Tủ lạnh', poolArea: 500,
      numberOfFloor: 6, facilityType: {
        id: 3,
        type: 'Room'}, rentType: {
        id: 3,
        type: 'Year'
      }}];
  constructor() { }

  getAll() {
    return this.facility;
  }

  findById(id: number) {
    return this.facility.find(f => f.serviceId === id);
  }

  updateFacility(id: number, f: Facility) {
    for (let i = 0; i < this.facility.length; i++) {
      if (this.facility[i].serviceId === id) {
        this.facility[i] = f;
      }
    }
  }

  delete(idToDelete: number) {
    this.facility = this.facility.filter(facility => facility.serviceId !== idToDelete);
  }

  add(any: Facility) {
     this.facility.push(any);
  }
}
