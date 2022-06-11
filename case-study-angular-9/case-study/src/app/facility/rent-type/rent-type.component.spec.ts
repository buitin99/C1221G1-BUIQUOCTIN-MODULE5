import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTypeComponent } from './rent-type.component';

describe('RentTypeComponent', () => {
  let component: RentTypeComponent;
  let fixture: ComponentFixture<RentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
