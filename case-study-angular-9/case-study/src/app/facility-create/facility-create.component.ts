import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../model/rent-type';
import {FacilityType} from '../model/facility-type';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})

export class FacilityCreateComponent implements OnInit {
  @Output() submitFacility = new EventEmitter();
  facilityForm: FormGroup;

  constructor() {
    this.facilityForm = new FormGroup({
      serviceName: new FormControl('', [Validators.required]),
      serviceArea: new FormControl('', [Validators.required]),
      serviceCost: new FormControl('', [Validators.required]),
      serviceMaxPeople: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      numberOfFloor: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  facilitySubmit() {
    console.log(this.facilityForm.value);
    if (this.facilityForm.valid) {
      this.submitFacility.emit(this.facilityForm.value);
    }
  }
}
