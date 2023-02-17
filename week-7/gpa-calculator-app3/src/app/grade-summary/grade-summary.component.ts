/**
 * Title: grade-summary.component.ts
 * Author: Walter McCue
 * Date: 02/12/23
 * Description: ts for the gpa-calculator-app project
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade!: string;
  @Input() course!: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
