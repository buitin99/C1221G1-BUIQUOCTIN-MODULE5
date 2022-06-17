import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {RentTypeService} from '../../service/rent-type.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

// <!--customerId: number;-->
// <!--customerName: string;-->
// <!--customerBirth: string;-->
// <!--customerGender: string;-->
// <!--customerIdCard: string;-->
// <!--customerPhone: string;-->
// <!--customerEmail: string;-->
// <!--customerAddress: string;-->
// <!--customerCode: string;-->
// <!--customerType: CustomerType;-->

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Output() submitCustomer = new EventEmitter();
  customerForm: FormGroup;

  customers: Customer[] = [];
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      customerEmail: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(84)+90|(84)+91)\d{7}$/)]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      customerBirth: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
      customerName: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required])
    });
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // this.customers = this.customerService.getAll();
    this.customerService.getAll().subscribe(customer => {
      this.customers = customer;
      console.log("error");
    })
  }

  idToDelete: number;
  nameToDelete: string;
  showMessage(id: number, customerName: string) {
    this.idToDelete = id;
    this.nameToDelete = customerName;
  }

  deleteModal() {
    this.customerService.delete(this.idToDelete).subscribe(() => {
      // @ts-ignore
      this.router.navigateByUrl(['/customers/list'])
    }, error => {
      console.log(error);
    });
    this.ngOnInit();
  }


}
