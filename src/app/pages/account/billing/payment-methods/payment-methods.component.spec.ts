import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsComponent } from './payment-methods.component';
import { BillingService } from '../billing.service';

describe('PaymentMethodsComponent', () => {
  let component: PaymentMethodsComponent;
  let fixture: ComponentFixture<PaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodsComponent ],
      providers: [ BillingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting tab should work', () => {
    component.ngOnInit();
    expect(component.billingService.selectedTab).toBe('payment-methods');
  });
});
