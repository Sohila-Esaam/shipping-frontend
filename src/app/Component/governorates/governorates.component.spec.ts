import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernoratesComponent } from './governorates.component';

describe('GovernoratesComponent', () => {
  let component: GovernoratesComponent;
  let fixture: ComponentFixture<GovernoratesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernoratesComponent]
    });
    fixture = TestBed.createComponent(GovernoratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
