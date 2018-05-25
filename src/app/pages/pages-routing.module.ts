import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: '', redirectTo: 'account' },
  { path: '**', redirectTo: 'account' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
