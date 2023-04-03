import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFotoPerfilComponent } from './modal-foto-perfil.component';

describe('ModalFotoPerfilComponent', () => {
  let component: ModalFotoPerfilComponent;
  let fixture: ComponentFixture<ModalFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFotoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
