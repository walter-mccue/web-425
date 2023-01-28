/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: app component for the composer-app project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Exercise 4.3 - Handling Events with Observables";
}
