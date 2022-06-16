import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facility: Facility[] = [];
  facilityDelete: string;

  constructor(private facilityService: FacilityService, private router: Router) { }

  ngOnInit(): void {
    this.getAll ();
  }

  getAll() {
    this.facility = this.facilityService.getAll();
  }
  delete(facilityName: string) {
    this.facilityDelete = facilityName;
  }
  idToDelete: number;
  nameToDelete: string;
  showMessage(serviceId: number, serviceName: string) {
    this.idToDelete = serviceId;
    this.nameToDelete = serviceName;
  }

  deleteModal() {
    this.facilityService.delete(this.idToDelete);
    // this.router.navigateByUrl("/facility");
    this.ngOnInit();
  }
}
