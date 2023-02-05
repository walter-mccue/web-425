/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 02/05/23
 * Description: ts file for the in-n-out-books project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }

}
