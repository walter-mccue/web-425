/**
 * Title: my-details.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: my-details.component.ts for the enhanced-profile-app project
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2023", "#CodingWithAngular", "#ngOrlando"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(`\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Walter McCue", "Smoked Brisket", "Red");
    this.myProfile.toString();
  }
  ngOnInit(): void {

  }
}
