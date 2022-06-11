import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  code: string;
  informationContract: Customer;
  informationCustomer: Facility;
  dateStart: string;
  dateEnd: string;
  money: number;
}
