import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityDetailService} from '../../service/facility-detail.service';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facilityEditForm: FormGroup;
  id: number;
  rentType: RentType[] = [];
  facility: FacilityType[] = [];
  constructor(private facilityService: FacilityService, private activatedRouter: ActivatedRoute,
              private router: Router,
              private renTypeService: RentTypeService,
              private facilityDetailService: FacilityDetailService) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>
      this.id = +paramMap.get('id'));
    const facility = this.getFacility(this.id);
    // const routerParams = this.activatedRouter.snapshot.paramMap;
    // this.id = Number(routerParams.get('serviceId'));
    // this.facility = this.facilityService.findById(this.id);
    // console.log(this.facility);
    console.log(facility);

  }

  ngOnInit(): void {
    this.rentType = this.renTypeService.getAll();
    this.facility = this.facilityDetailService.getAll();
  }


  getFacility(id: number) {
    // return this.facilityService.findById(id);
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityEditForm = new FormGroup({
        serviceName: new FormControl(facility.serviceName, [Validators.required]),
        serviceArea: new FormControl(facility.serviceArea, [Validators.required]),
        serviceCost: new FormControl(facility.serviceCost, [Validators.required]),
        serviceMaxPeople: new FormControl(facility.serviceMaxPeople, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityDetail: new FormControl(facility.facilityType, [Validators.required]),
        numberOfFloor: new FormControl(facility.numberOfFloor, [Validators.required])
      });
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityEditForm.value;
    if (this.facilityEditForm.valid) {
      this.facilityService.updateFacility(id, facility).subscribe(() => {
        alert('Cập nhật thành công!');
        this.router.navigateByUrl('facility/list');
      });
    }
    this.ngOnInit()
    console.log(facility);
    console.log(this.facilityEditForm.valid);
  }
}
