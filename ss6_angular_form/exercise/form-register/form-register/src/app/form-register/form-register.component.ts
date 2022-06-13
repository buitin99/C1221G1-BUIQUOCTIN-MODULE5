import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  form: FormGroup;


  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Canada'},
    {id: 3, name: 'USA'},
  ];


  constructor() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required,
        Validators.minLength(6)]),
      country: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\+84\d{9,10}$/)])
    },this.validateConfirmPassword)
  }

  ngOnInit(): void {
  }



  validateConfirmPassword(confirm: AbstractControl) {
    let password = confirm.get('password').value;
    let confirmPassword = confirm.get('confirmPassword').value;
    if (confirmPassword !== password) {
      return {
        confirmPassword: true
      };
    } else {
      return null;
    }
  }

  formRegister() {
    if (this.form.valid) {
      this.submitCreate.emit(this.form.value);
    }
  }


}
