import { Injectable } from '@angular/core';
import {FacilityType} from '../model/facility-type';
import {RentType} from '../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypes: RentType[] = [{
    id: 1,
    type: 'Day'
  }, {
    id: 2,
    type: 'Month',
  }, {
    id: 3,
    type: 'Year',
  }];

  constructor() { }
  getAll() {
    return this.rentTypes;
  }
}
