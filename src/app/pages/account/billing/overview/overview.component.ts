import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    public billingService: BillingService
  ) { }

  ngOnInit() {
    this.billingService.selectedTab = 'overview';
  }

}
