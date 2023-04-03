import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAboutmeComponent } from './modal-edit-aboutme.component';

describe('ModalEditAboutmeComponent', () => {
  let component: ModalEditAboutmeComponent;
  let fixture: ComponentFixture<ModalEditAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
