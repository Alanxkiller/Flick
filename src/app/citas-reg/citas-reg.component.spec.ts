import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRegComponent } from './citas-reg.component';

describe('CitasRegComponent', () => {
  let component: CitasRegComponent;
  let fixture: ComponentFixture<CitasRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
