import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

registerLocaleData(localeFR);

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
