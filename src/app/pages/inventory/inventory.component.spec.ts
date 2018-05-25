import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../../shared/shared.module';
import {
  LocaleValidationModule,
  LocalizationModule,
  TranslationService
} from 'angular-l10n';
import { l10nConfig } from '../../shared/consts';

import { RemindTableComponent } from './remind-table/remind-table.component';
import { RemindTableFilterComponent } from './remind-table-filter/remind-table-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '../../shared/services/translate.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InventoryComponent,
        RemindTableComponent,
        RemindTableFilterComponent
      ],
      imports: [
        SharedModule
      ],
      providers: [
        TranslateService,
        TranslationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Func:get filterIconUrl should work', () => {
    component.sidebarOpened = true;
    expect(component.filterIconUrl).toEqual('assets/images/icons/x-white.svg');
    component.sidebarOpened = false;
    expect(component.filterIconUrl).toEqual('assets/images/icons/filter-white.svg');
  });

  it('Func:toggleSidebar should work', () => {
    component.sidebarOpened = true;
    expect(component.toggleSidebar()).toEqual(false);
  });
});
