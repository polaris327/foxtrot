import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import {
  LocalizationModule,
  LocaleValidationModule,
  L10nLoader
} from 'angular-l10n';
import { l10nConfig } from './consts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleValidationModule.forRoot(),
    NgbModule.forRoot()
  ],
  exports: [
    LocalizationModule,
    LocaleValidationModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ CommonService ]
})
export class SharedModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
