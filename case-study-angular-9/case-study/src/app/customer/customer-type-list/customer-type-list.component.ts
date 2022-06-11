import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-type-list',
  templateUrl: './customer-type-list.component.html',
  styleUrls: ['./customer-type-list.component.css']
})
export class CustomerTypeListComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  constructor(private customerType: CustomerTypeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerTypes = this.customerType.getAll();
  }

}
