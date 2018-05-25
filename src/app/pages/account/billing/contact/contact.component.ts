import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public billingService: BillingService
  ) { }

  ngOnInit() {
    this.billingService.selectedTab = 'contact';
  }

}
