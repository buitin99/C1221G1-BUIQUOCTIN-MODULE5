import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output() submitCustomer = new EventEmitter();
  customerForm: FormGroup;

  constructor() {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern( /^KH-\d{4}$/)]),
      customerEmail: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(84)+90|(84)+91)\d{7}$/)]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      customerBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)])
    });
  }

  ngOnInit(): void {
  }

  customerSubmit() {
    if (this.customerForm.valid) {
      this.submitCustomer.emit(this.customerForm.value);
    }
  }
}
