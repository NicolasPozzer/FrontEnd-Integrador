import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesAdminComponent } from './redes-admin.component';

describe('RedesAdminComponent', () => {
  let component: RedesAdminComponent;
  let fixture: ComponentFixture<RedesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
