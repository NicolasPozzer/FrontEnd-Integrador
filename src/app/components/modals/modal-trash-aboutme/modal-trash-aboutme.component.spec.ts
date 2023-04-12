import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrashAboutmeComponent } from './modal-trash-aboutme.component';

describe('ModalTrashAboutmeComponent', () => {
  let component: ModalTrashAboutmeComponent;
  let fixture: ComponentFixture<ModalTrashAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTrashAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTrashAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
