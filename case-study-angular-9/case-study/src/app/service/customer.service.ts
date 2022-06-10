import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [{customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
    customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
    customerAddress: 'DaNang'
  }, {customerCode: 'KH-0002', customerId: 2, customerName: 'Bùi Quốc Tính', customerBirth: '1999-01-01',
    customerIdCard: '4523857463', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
    customerAddress: 'DaNang'
  }, {customerCode: 'KH-0003', customerId: 3, customerName: 'Bùi Quốc Tínn', customerBirth: '1999-01-01',
    customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
    customerAddress: 'DaNang'
  }, {customerCode: 'KH-0004', customerId: 4, customerName: 'Bùi Quốc Tin', customerBirth: '1999-01-01',
    customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
    customerAddress: 'DaNang'
  }];

  constructor() { }

  getAll() {
    return this.customers;
  }
}