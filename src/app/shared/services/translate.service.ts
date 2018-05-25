import { Injectable } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';

@Injectable()
export class TranslateService {

  constructor(
    private translationService: TranslationService
  ) { }

  public replaceTranslationTemplate(translatedText: string, replacementObject: any): string {
    templateSettings.interpolate = /%{([\s\S]+?)}/g;
    const compiled = template(translatedText);
    return compiled(replacementObject);
  }

  public translateText(key: string, value: any): string {
    return this.replaceTranslationTemplate(this.translationService.translate(key), value);
  }
}
