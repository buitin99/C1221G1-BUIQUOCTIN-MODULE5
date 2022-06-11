import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../model/facility-type';
import {FacilityTypeService} from '../../service/facility-type.service';

@Component({
  selector: 'app-facility-type',
  templateUrl: './facility-type.component.html',
  styleUrls: ['./facility-type.component.css']
})
export class FacilityTypeComponent implements OnInit {
  facilityTypes: FacilityType[] = [];

  constructor(private facilityTypeService: FacilityTypeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityTypes = this.facilityTypeService.getAll();
  }

}
