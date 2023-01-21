/**
 * Title: signin.component.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: signin.component.ts file for the secure-profile-app project
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true});
  }
}
