import {Component, OnInit} from '@angular/core';
import {FacilityDetail} from '../../model/facility-detail';
import {FacilityDetailService} from '../../service/facility-detail.service';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  facilityDetails: FacilityDetail[] = [];

  constructor(private facilityDetailService: FacilityDetailService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityDetails = this.facilityDetailService.getAll();
  }
}
