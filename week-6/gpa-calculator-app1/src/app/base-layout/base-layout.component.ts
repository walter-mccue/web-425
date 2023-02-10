/**
 * Title: base-layout.component.ts
 * Author: Walter McCue
 * Date: 02/12/23
 * Description: ts for the gpa-calculator-app project
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
