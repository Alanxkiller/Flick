import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHijoComponent } from './buscar-hijo.component';

describe('BuscarHijoComponent', () => {
  let component: BuscarHijoComponent;
  let fixture: ComponentFixture<BuscarHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarHijoComponent]
    });
    fixture = TestBed.createComponent(BuscarHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
