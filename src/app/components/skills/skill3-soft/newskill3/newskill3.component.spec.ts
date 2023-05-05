import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newskill3Component } from './newskill3.component';

describe('Newskill3Component', () => {
  let component: Newskill3Component;
  let fixture: ComponentFixture<Newskill3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newskill3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newskill3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
