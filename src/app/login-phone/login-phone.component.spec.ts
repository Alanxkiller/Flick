import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhoneComponent } from './login-phone.component';

describe('LoginPhoneComponent', () => {
  let component: LoginPhoneComponent;
  let fixture: ComponentFixture<LoginPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPhoneComponent]
    });
    fixture = TestBed.createComponent(LoginPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
