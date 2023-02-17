/**
 * Title: main.ts
 * Author: Walter McCue
 * Date: 02/12/23
 * Description: main.ts for the gpa-calculator-app project
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
