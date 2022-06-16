import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {log} from 'util';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facilityEditForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService, private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>
      this.id = +  paramMap.get('serviceId'));
    const facility = this.getFacility(this.id);
    // const routerParams = this.activatedRouter.snapshot.paramMap;
    // this.id = Number(routerParams.get('serviceId'));
    // this.facility = this.facilityService.findById(this.id);
    // console.log(this.facility);
    console.log(facility);
    this.facilityEditForm = new FormGroup({
      serviceName: new FormControl(facility.serviceName, [Validators.required]),
      serviceArea: new FormControl(facility.serviceArea, [Validators.required]),
      serviceCost: new FormControl(facility.serviceCost, [Validators.required]),
      serviceMaxPeople: new FormControl(facility.serviceMaxPeople, [Validators.required]),
      standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
      descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
      poolArea: new FormControl(facility.poolArea, [Validators.required]),
      numberOfFloor: new FormControl(facility.numberOfFloor, [Validators.required])
    });
  }

  ngOnInit(): void {

  }


   getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.facilityEditForm.value;
    if (this.facilityEditForm.valid){
      this.facilityService.updateFacility(id, facility);
      alert('Cập nhật thành công!');
      this.router.navigateByUrl('facility');
      // this.ngOnInit()
    }
    console.log(facility);
  }
}
