import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilitys: Facility[] = [{serviceId: 1, serviceName: 'villa', serviceArea: '2000m', serviceCost: '500'},
    {serviceId: 2, serviceName: 'beach', serviceArea: '2000m', serviceCost: '500'},
    {serviceId: 3, serviceName: 'villa', serviceArea: '2000m', serviceCost: '500'}];
  constructor() { }

  getAll() {
    return this.facilitys;
  }


}
