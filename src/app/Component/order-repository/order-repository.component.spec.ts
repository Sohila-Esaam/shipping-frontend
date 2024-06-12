import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRepositoryComponent } from './order-repository.component';

describe('OrderRepositoryComponent', () => {
  let component: OrderRepositoryComponent;
  let fixture: ComponentFixture<OrderRepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderRepositoryComponent]
    });
    fixture = TestBed.createComponent(OrderRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
