/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: app component for the enhanced-profile-app project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
