import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNumber(x:string) {
    (document.getElementById("display")as HTMLInputElement).value += x;
    return x;
  }

  clear() {
    (document.getElementById("display")as HTMLInputElement).value="";
  }

  result() {
    let x = (document.getElementById("display")as HTMLInputElement).value;
    let y = eval(x);
    (document.getElementById("display")as HTMLInputElement).value = y;
    return y;
  }
}
