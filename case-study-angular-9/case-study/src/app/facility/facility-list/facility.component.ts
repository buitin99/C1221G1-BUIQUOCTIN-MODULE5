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
    // this.facility = this.facilityService.getAll();
    this.facilityService.getAll().subscribe(f => {
      this.facility = f;
      console.log("error");
    })
    this.ngOnInit();
  }
  delete(facilityName: string) {
    this.facilityDelete = facilityName;
  }
  id: number;
  nameToDelete: string;
  showMessage(serviceId: number, serviceName: string) {
    this.id = serviceId;
    this.nameToDelete = serviceName;
  }

  deleteModal() {
    this.facilityService.delete(this.id);
    // this.router.navigateByUrl("/facility");
    this.ngOnInit();
  }
}
