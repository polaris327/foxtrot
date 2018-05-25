import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  constructor(
    public billingService: BillingService
  ) { }

  ngOnInit() {
    this.billingService.selectedTab = 'payment-methods';
  }

}
