/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 01/02/23
 * Description: app component for the hello-world project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Walter McCue's World!";
}
