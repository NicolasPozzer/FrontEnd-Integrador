import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarousel2Component } from './edit-carousel2.component';

describe('EditCarousel2Component', () => {
  let component: EditCarousel2Component;
  let fixture: ComponentFixture<EditCarousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarousel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
