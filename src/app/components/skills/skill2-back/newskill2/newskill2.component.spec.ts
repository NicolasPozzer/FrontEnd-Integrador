import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newskill2Component } from './newskill2.component';

describe('Newskill2Component', () => {
  let component: Newskill2Component;
  let fixture: ComponentFixture<Newskill2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newskill2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newskill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
