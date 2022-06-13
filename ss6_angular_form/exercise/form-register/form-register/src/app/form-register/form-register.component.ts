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
    })
  }

  ngOnInit(): void {
  }

  // validatePhone(phone: AbstractControl) {
  //
  //   let value = phone.value;
  //   console.log(value);
  //   if (value != (/^\+84\d{9,10}$/)) {
  //     return {'invalidPhone': true};
  //   } else {
  //     return null;
  //   }
  // }

  valideteConfirmPassword(confirmPassword: AbstractControl, password) {
    let result = password.value;
    let value = confirmPassword.value;
    if (result == value){
      return {'invalidPassword' : true};
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
