import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypeListComponent } from './customer-type-list.component';

describe('CustomerTypeListComponent', () => {
  let component: CustomerTypeListComponent;
  let fixture: ComponentFixture<CustomerTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
