import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-man',
  templateUrl: './color-man.component.html',
  styleUrls: ['./color-man.component.css']
})
export class ColorManComponent implements OnInit {

  color = '#000000';
  constructor() { }

  ngOnInit(): void {
  }
}
