import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {
  @Input() facilityDelete; string;
  constructor() { }

  ngOnInit(): void {
  }

}
