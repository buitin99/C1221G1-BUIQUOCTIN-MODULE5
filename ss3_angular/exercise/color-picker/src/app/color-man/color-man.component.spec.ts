import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorManComponent } from './color-man.component';

describe('ColorManComponent', () => {
  let component: ColorManComponent;
  let fixture: ComponentFixture<ColorManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
