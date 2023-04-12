import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameCarouselComponent } from './edit-name-carousel.component';

describe('EditNameCarouselComponent', () => {
  let component: EditNameCarouselComponent;
  let fixture: ComponentFixture<EditNameCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNameCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNameCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
