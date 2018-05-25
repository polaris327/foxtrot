import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    public billingService: BillingService
  ) { }

  ngOnInit() {
    this.billingService.selectedTab = 'history';
  }

}
