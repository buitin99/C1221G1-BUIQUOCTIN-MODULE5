import { Component, OnInit } from '@angular/core';
import {RentType} from '../../model/rent-type';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-rent-type',
  templateUrl: './rent-type.component.html',
  styleUrls: ['./rent-type.component.css']
})
export class RentTypeComponent implements OnInit {
  rentTypes: RentType[] = [];

  constructor(private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rentTypes = this.rentTypeService.getAll();
  }
}
