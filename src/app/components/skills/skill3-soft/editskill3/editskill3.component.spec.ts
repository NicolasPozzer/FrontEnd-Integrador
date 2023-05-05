import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editskill3Component } from './editskill3.component';

describe('Editskill3Component', () => {
  let component: Editskill3Component;
  let fixture: ComponentFixture<Editskill3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editskill3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editskill3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
