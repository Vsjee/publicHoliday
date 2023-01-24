import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysCountryDataComponent } from './holidays-country-data.component';

describe('HolidaysCountryDataComponent', () => {
  let component: HolidaysCountryDataComponent;
  let fixture: ComponentFixture<HolidaysCountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysCountryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaysCountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
