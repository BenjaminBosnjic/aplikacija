import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliclinicAppComponent } from './policlinic-app.component';

describe('PoliclinicAppComponent', () => {
  let component: PoliclinicAppComponent;
  let fixture: ComponentFixture<PoliclinicAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliclinicAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliclinicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
