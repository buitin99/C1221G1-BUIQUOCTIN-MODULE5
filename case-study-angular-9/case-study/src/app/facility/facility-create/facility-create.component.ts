import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityDetailService} from '../../service/facility-detail.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})

export class FacilityCreateComponent implements OnInit {
  @Output() submitFacility = new EventEmitter();
  facilityForm: FormGroup;
  rentType: RentType[] = [];
  facility: FacilityType[] = [];

  constructor(private facilityService: FacilityService,
              private renTypeService: RentTypeService,
              private facilityDetailService: FacilityDetailService,
              private router: Router) {
    this.facilityForm = new FormGroup({
      serviceName: new FormControl('', [Validators.required]),
      serviceArea: new FormControl('', [Validators.required]),
      serviceCost: new FormControl('', [Validators.required]),
      serviceMaxPeople: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      facilityDetail: new FormControl('', [Validators.required]),
      numberOfFloor: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.rentType = this.renTypeService.getAll();
    this.facility = this.facilityDetailService.getAll();
  }

  facilitySubmit() {
    console.log(this.facilityForm.value);
    if (this.facilityForm.valid) {
      this.submitFacility.emit(this.facilityForm.value);
      this.facilityService.add(this.facilityForm.value);
      this.router.navigateByUrl('facility');
      console.log(this.facilityForm);
    }
  }
}
