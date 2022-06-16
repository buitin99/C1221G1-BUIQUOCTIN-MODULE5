import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {FacilityDetail} from '../../model/facility-detail';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})

export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // return this.contracts = this.contractService.getAll();
    this.contractService.getAll().subscribe(contract => {
      this.contracts = contract;
    })
  }
}
