import {Customer} from './customer';
import {FacilityDetail} from './facility-detail';

export interface Contract {
  contractId?: number;
  code: string;
  customerName: Customer;
  facilityDetail: FacilityDetail;
  dateStart: string;
  dateEnd: string;
  deposit: number;
}
