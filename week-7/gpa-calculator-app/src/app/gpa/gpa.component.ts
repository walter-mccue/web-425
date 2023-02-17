/**
 * Title: gpa.component.ts
 * Author: Walter McCue
 * Date: 02/12/23
 * Description: ts for the gpa-calculator-app project
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
