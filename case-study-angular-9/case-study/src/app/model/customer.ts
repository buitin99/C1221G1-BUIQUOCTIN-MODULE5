import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerName?: string;
  customerBirth?: string;
  customerGender?: string;
  customerIdCard?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;
  customerCode?: string;
  customerType?: CustomerType;

}
