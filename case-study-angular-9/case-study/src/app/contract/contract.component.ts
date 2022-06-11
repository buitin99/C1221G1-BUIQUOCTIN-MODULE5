import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.contracts = this.contractService.getAll();
  }
}
