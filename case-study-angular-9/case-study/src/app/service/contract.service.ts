import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  // contracts: Contract[] = [{
  //   contractId: 1,
  //   code: 'HD-0001', customerName: {customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
  //     customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //     customerAddress: 'DaNang', customerType: {
  //       id: 1,
  //       type: 'Diamond'
  //     }}, dateStart: '2022-01-01', dateEnd: '2022-03-03', deposit: 200, facilityDetail: {id: 1, type: 'Buffet'},
  // },
  //   {contractId: 2,
  //     code: 'HD-0002', customerName: {customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
  //       customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //       customerAddress: 'DaNang', customerType: {
  //         id: 1,
  //         type: 'Diamond'
  //       }}, dateStart: '2022-01-01', dateEnd: '2022-03-03', deposit: 200, facilityDetail: {id: 1, type: 'Buffet'},
  //   },
  //   {contractId: 3,
  //     code: 'HD-0003', customerName: {customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
  //       customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //       customerAddress: 'DaNang', customerType: {
  //         id: 1,
  //         type: 'Diamond'
  //       }}, dateStart: '2022-01-01', dateEnd: '2022-03-03', deposit: 200, facilityDetail: {id: 1, type: 'Buffet'},
  //   },
  //   {contractId: 4,
  //     code: 'HD-0004', customerName: {customerCode: 'KH-0001', customerId: 1, customerName: 'Bùi Quốc Tín', customerBirth: '1999-01-01',
  //       customerIdCard: '4523857462', customerGender: 'male', customerPhone: '0123456789', customerEmail: 'buiquoctin@gmail.com',
  //       customerAddress: 'DaNang', customerType: {
  //         id: 1,
  //         type: 'Diamond'
  //       }}, dateStart: '2022-01-01', dateEnd: '2022-03-03', deposit: 200, facilityDetail: {id: 1, type: 'Buffet'},
  //   }];

  constructor(private http: HttpClient) { }
  getAll(): Observable<Contract[]> {
    // return this.contracts;
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }


  // @ts-ignore
  add(contract) : Observable<Contract> {
    // this.contracts.push(value);
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }
}
