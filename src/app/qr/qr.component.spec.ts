import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRComponent } from './qr.component';

describe('QRComponent', () => {
  let component: QRComponent;
  let fixture: ComponentFixture<QRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRComponent]
    });
    fixture = TestBed.createComponent(QRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
