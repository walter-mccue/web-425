/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 02/12/23
 * Description: ts for the gpa-calculator-app project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'GPA Calculator';
}
