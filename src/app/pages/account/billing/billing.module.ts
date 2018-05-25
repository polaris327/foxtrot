import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { SharedModule } from '../../../shared/shared.module';
import { BillingService } from './billing.service';

@NgModule({
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ],
  declarations: [ BillingComponent ],
  providers: [ BillingService ]
})
export class BillingModule { }
