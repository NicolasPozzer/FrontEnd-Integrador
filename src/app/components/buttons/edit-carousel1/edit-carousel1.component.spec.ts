import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarousel1Component } from './edit-carousel1.component';

describe('EditCarousel1Component', () => {
  let component: EditCarousel1Component;
  let fixture: ComponentFixture<EditCarousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarousel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
