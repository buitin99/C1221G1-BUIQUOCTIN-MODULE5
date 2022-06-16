import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerEditForm: FormGroup;
  id: number;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService, private activatedRouter: ActivatedRoute,
              private customerTypeService: CustomerTypeService
  ,private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>
      this.id = +paramMap.get('customerId'));
    const customer = this.getCustomer(this.id);
    console.log(customer);
    this.customerEditForm = new FormGroup({
      customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      customerName: new FormControl(customer.customerName, [Validators.required]),
      customerPhone: new FormControl(customer.customerPhone, [Validators.required,  Validators.pattern(/^(090|091|(84)+90|(84)+91)\d{7}$/)]),
      customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
      customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
      customerType: new FormControl(customer.customerType, [Validators.required]),
      customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern(/^\d{9}$/)]),
      customerBirth: new FormControl(customer.customerBirth, [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)])
    });
  }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAll();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(id: number) {
    const customer = this.customerEditForm.value;
    this.customerService.updateCustomer(id, customer);
    alert('Update thanh cong');
    this.router.navigateByUrl('customer');
  }
}
