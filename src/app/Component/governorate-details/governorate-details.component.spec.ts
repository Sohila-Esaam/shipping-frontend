import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernorateDetailsComponent } from './governorate-details.component';

describe('GovernorateDetailsComponent', () => {
  let component: GovernorateDetailsComponent;
  let fixture: ComponentFixture<GovernorateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernorateDetailsComponent]
    });
    fixture = TestBed.createComponent(GovernorateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
