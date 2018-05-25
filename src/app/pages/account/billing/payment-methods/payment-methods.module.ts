import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodsRoutingModule } from './payment-methods-routing.module';
import { PaymentMethodsComponent } from './payment-methods.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentMethodsRoutingModule
  ],
  declarations: [PaymentMethodsComponent]
})
export class PaymentMethodsModule { }
