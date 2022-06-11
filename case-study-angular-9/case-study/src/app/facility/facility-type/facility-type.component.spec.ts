import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTypeComponent } from './facility-type.component';

describe('FacilityTypeComponent', () => {
  let component: FacilityTypeComponent;
  let fixture: ComponentFixture<FacilityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
