import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelivaryComponent } from './add-delivary.component';

describe('AddDelivaryComponent', () => {
  let component: AddDelivaryComponent;
  let fixture: ComponentFixture<AddDelivaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDelivaryComponent]
    });
    fixture = TestBed.createComponent(AddDelivaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
