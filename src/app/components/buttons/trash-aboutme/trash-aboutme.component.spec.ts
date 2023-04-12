import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashAboutmeComponent } from './trash-aboutme.component';

describe('TrashAboutmeComponent', () => {
  let component: TrashAboutmeComponent;
  let fixture: ComponentFixture<TrashAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
