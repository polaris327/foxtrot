import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { RemindTableComponent } from './remind-table/remind-table.component';
import { SharedModule } from '../../shared/shared.module';
import { RemindTableFilterComponent } from './remind-table-filter/remind-table-filter.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ],
  declarations: [InventoryComponent, RemindTableComponent, RemindTableFilterComponent]
})
export class InventoryModule { }
