import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEditComponent } from './validation-edit.component';

describe('ValidationEditComponent', () => {
  let component: ValidationEditComponent;
  let fixture: ComponentFixture<ValidationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationEditComponent]
    });
    fixture = TestBed.createComponent(ValidationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
