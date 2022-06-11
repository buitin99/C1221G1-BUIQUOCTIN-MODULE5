import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[] = [{
    id: 1,
    type: 'Villa'
  }, {
    id: 2,
    type: 'House',
  }, {
    id: 3,
    type: 'Room',
  }];


  constructor() { }
}
