import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customers: Customer[] = [{customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
  //   customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //   customerAddress: 'DaNang', customerType: {
  //     id: 1,
  //     type: 'Diamond'
  //   }
  // }, {customerCode: 'KH-0002', customerId: 2, customerName: 'Bùi Quốc Tính', customerBirth: '1999-01-01',
  //   customerIdCard: '4523857463', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //   customerAddress: 'DaNang', customerType: {
  //   id: 2,
  //     type: 'Platinum'
  //   }
  // }, {customerCode: 'KH-0003', customerId: 3, customerName: 'Bùi Quốc Tínn', customerBirth: '1999-01-01',
  //   customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //   customerAddress: 'DaNang', customerType: {
  //   id: 3,
  //   type: 'Gold'
  //   }
  // }, {customerCode: 'KH-0004', customerId: 4, customerName: 'Bùi Quốc Tin', customerBirth: '1999-01-01',
  //   customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //   customerAddress: 'DaNang', customerType: {
  //   id: 5,
  //     type: 'Member'
  //   }
  // }];

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<Customer[]> {
    // return this.customers;
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  findById(id: number): Observable<Customer> {
    // return this.customers.find(c => c.customerId === id);
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    // for (let i = 0; i < this.customers.length; i++) {
    //   if (this.customers[i].customerId === id) {
    //    this.customers[i] = customer;
    //   }
    // }
    // this.getAll();
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  add(customer: Customer): Observable<Customer> {
    // this.customers.push(value);
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  delete(id: number): Observable<Customer> {
    // this.customers = this.customers.filter(customer => customer.customerId !== idToDelete);
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
}
