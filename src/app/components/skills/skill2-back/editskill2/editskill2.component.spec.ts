import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editskill2Component } from './editskill2.component';

describe('Editskill2Component', () => {
  let component: Editskill2Component;
  let fixture: ComponentFixture<Editskill2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editskill2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editskill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
