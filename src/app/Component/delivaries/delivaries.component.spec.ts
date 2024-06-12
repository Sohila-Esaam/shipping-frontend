import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivariesComponent } from './delivaries.component';

describe('DelivariesComponent', () => {
  let component: DelivariesComponent;
  let fixture: ComponentFixture<DelivariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelivariesComponent]
    });
    fixture = TestBed.createComponent(DelivariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
