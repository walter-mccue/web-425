/**
 * Title: composer-list.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: composer list component for the composer-app project
*/

import { Component, OnInit } from '@angular/core';

// export statement for the created composer class

export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//exports the component and the composers array

export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beetoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical"),
      new Composer("Nobuo Uematsu", "Modern Orchestral"),
    ]
  }
  ngOnInit(): void {

  }
}
