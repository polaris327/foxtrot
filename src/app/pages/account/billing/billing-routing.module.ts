import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
    children: [
      { path: '', redirectTo: 'overview' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
      { path: 'history', loadChildren: './history/history.module#HistoryModule' },
      { path: 'payment-methods', loadChildren: './payment-methods/payment-methods.module#PaymentMethodsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
