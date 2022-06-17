import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facility: Facility[];
  facilityDelete: string;

  constructor(private facilityService: FacilityService, private router: Router) { }

  ngOnInit(): void {
    this.getAll ();
  }

  getAll() {
    this.facilityService.getAll().subscribe(f => {
      this.facility = f;
    })
  };
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
    this.facilityService.delete(this.id).subscribe(() => {
      this.ngOnInit();
      this.router.navigateByUrl('/facilities/list');
    })

  }
}
