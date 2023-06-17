import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFComponent } from './contacto-f.component';

describe('ContactoFComponent', () => {
  let component: ContactoFComponent;
  let fixture: ComponentFixture<ContactoFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoFComponent]
    });
    fixture = TestBed.createComponent(ContactoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
