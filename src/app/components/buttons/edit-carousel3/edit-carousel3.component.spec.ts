import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarousel3Component } from './edit-carousel3.component';

describe('EditCarousel3Component', () => {
  let component: EditCarousel3Component;
  let fixture: ComponentFixture<EditCarousel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarousel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
