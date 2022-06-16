import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityDetailService} from '../../service/facility-detail.service';
import {Facility} from '../../model/facility';
import {FacilityType} from '../../model/facility-type';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  @Output() submitContract = new EventEmitter();
  contractForm: FormGroup;
  id: number;
  facility: FacilityType[] = [];
  customer: Customer[] = [];
  constructor(private contractService: ContractService,
              private facilityDetailService: FacilityDetailService,
              private customerService: CustomerService
, private router: Router) {
    this.contractForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(/^HD-\d{4}$/)]),
    customerName: new FormControl('', [Validators.required]),
    dateStart: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    dateEnd: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    facilityDetail: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required])
  });
  }

  ngOnInit(): void {
    this.facility = this.facilityDetailService.getAll();
    this.customer = this.customerService.getAll();
  }

  contractSubmit() {
    if (this.contractForm.valid) {
      this.submitContract.emit(this.contractForm.value);
      // this.contractService.add(this.contractForm.value);
      const contract = this.contractForm.value;
      this.contractService.add(contract).subscribe(() => {
        this.contractForm.reset();
        alert('Tạo thành công');
      },error => {
        console.log(error);
      })
      this.router.navigateByUrl('contract/list');
      this.ngOnInit();
    }
  }
}
