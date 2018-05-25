import { Injectable } from '@angular/core';

@Injectable()
export class BillingService {
  private _selectedTab: string;

  constructor() { }

  get selectedTab(): string {
    return this._selectedTab;
  }

  set selectedTab(tab: string) {
    this._selectedTab = tab;
  }
}
