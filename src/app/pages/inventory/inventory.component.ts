import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RemindTable, RemindTableMock } from '../../shared/models';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InventoryComponent implements OnInit {
  tableData: RemindTable;
  sidebarOpened: boolean;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.tableData = RemindTableMock;
  }

  get reminderText(): string {
    return this.translateService.translateText('inventory_search_reminders', {});
  }

  get filterIconUrl(): string {
    return this.sidebarOpened ? 'assets/images/icons/x-white.svg' : 'assets/images/icons/filter-white.svg';
  }

  toggleSidebar(): boolean {
    this.sidebarOpened = !this.sidebarOpened;
    return this.sidebarOpened;
  }
}
