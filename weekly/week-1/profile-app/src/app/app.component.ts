/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 01/02/23
 * Description: app component for the profile-app project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components";
}
