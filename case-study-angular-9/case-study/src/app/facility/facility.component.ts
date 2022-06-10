import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilitys: Facility[] = [];

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAll ();
  }

  getAll() {
    this.facilitys = this.facilityService.getAll();
  }
}
