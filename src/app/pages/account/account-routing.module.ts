import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'billing', loadChildren: './billing/billing.module#BillingModule' },
      { path: '', redirectTo: 'billing' },
      { path: '**', redirectTo: 'billing' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
