import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutmeComponent } from './edit-aboutme.component';

describe('EditAboutmeComponent', () => {
  let component: EditAboutmeComponent;
  let fixture: ComponentFixture<EditAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
