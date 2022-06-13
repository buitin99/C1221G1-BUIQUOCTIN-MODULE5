import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Output() submitCustomer = new EventEmitter();
  customerForm: FormGroup;

  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern( /^KH-\d{4}$/),
      this.validCustomerCode]),
      customerEmail: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(84)+90|(84)+91)\d{7}$/)]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      customerBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)])
    });
  }

  validCustomerCode(customerCode: AbstractControl) {
    let a;
    a = customerCode.value;
    if (a !== (/^KH-\d{4}$/)) {
      return {invalidCode : true};
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }

}
