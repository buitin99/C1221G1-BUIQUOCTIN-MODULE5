import { Injectable } from '@angular/core';
import {FacilityDetail} from '../model/facility-detail';

@Injectable({
  providedIn: 'root'
})
export class FacilityDetailService {
  facilityDetails: FacilityDetail[] = [{
    id: 1,
    type: 'Buffet'
  }, {
    id: 2,
    type: 'Karaoke',
  }, {
    id: 3,
    type: 'Xe đạp',
  }, {
    id: 4,
    type: 'Massage',
  }, {
    id: 5,
    type: 'Tổ chức sinh nhật',
  }];

  constructor() { }
  getAll() {
    return this.facilityDetails;
  }
}
