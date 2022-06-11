import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypes: CustomerType[] = [{
    id: 1,
    type: 'Diamond'
  }, {
    id: 2,
    type: 'Platinum',
  }, {
    id: 3,
    type: 'Gold',
  }
    , {
      id: 4,
      type: 'Silver',
    }
    , {
      id: 5,
      type: 'Member',
    }];


  constructor() {
  }

  getAll() {
    return this.customerTypes;
  }
}
