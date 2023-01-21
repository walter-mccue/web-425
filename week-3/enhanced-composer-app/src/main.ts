/**
 * Title: main.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: main.ts for the composer-app project
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
