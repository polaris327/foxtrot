import { TestBed, inject } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import {
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  TranslationService
} from 'angular-l10n';
import { l10nConfig } from '../consts';

import { HttpClientModule } from '@angular/common/http';

describe('TranslateService', () => {
  let l10nLoader: L10nLoader;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot(),
      ],
      providers: [ TranslateService, TranslationService ]
    });
  });

  beforeEach((done: any) => {
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load().then(() => done());
  });

  it('should be created', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));

  it('Func:replaceTranslationTemplate() should work', inject([TranslateService], (service: TranslateService) => {
    expect(service.replaceTranslationTemplate('Hello, %{user}.', {user: 'testing'})).toBe('Hello, testing.');
  }));

  it('Func:translateText() should work', inject([TranslateService, TranslationService],
    (service: TranslateService, translateionService: TranslationService) => {
      expect(service.translateText('common_hello_user', { user: 'testing' })).toBe('Hello, testing.');
    }
  ));
});
