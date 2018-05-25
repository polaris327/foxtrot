import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BillingService } from './billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BillingComponent implements OnInit {

  constructor(
    public billingSerivce: BillingService
  ) { }

  ngOnInit() {
  }

}
