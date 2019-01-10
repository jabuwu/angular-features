import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// change development locale (en or ja)
const locale: string = 'en';

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = environment.production ? null : (locale == 'en' ? null : require(`raw-loader!./i18n/messages.${locale}.xlf`));

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
});
