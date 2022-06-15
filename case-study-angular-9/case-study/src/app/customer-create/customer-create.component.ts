import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output() submitCustomer = new EventEmitter();
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern( /^KH-\d{4}$/)]),
      customerName: new FormControl('', [Validators.required]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(84)+90|(84)+91)\d{7}$/)]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      customerBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)])
    });
  }

  ngOnInit(): void {
  }

  customerSubmit() {
    if (this.customerForm.valid) {
      this.submitCustomer.emit(this.customerForm.value);
      this.customerService.add(this.customerForm.value);
      this.router.navigateByUrl('customer');
    }
  }
}
