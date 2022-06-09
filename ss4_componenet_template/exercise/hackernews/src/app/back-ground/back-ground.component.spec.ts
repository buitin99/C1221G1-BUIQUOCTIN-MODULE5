import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackGroundComponent } from './back-ground.component';

describe('BackGroundComponent', () => {
  let component: BackGroundComponent;
  let fixture: ComponentFixture<BackGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
