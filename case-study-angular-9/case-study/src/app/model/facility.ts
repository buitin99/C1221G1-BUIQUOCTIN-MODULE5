import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id: number;
  serviceName: string;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloor: number;
  rentType: RentType;
  facilityType: FacilityType;
}
