import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  @Output() submitContract = new EventEmitter();
  contractForm: FormGroup;
  constructor() { this.contractForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(/^HD-\d{4}$/)]),
    customerName: new FormControl('', [Validators.required]),
    dateStart: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    dateEnd: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    deposit: new FormControl('', [Validators.required])
  });
  }

  ngOnInit(): void {
  }

  contractSubmit() {
    if (this.contractForm.valid) {
      this.submitContract.emit(this.contractForm.value);
    }
  }
}
