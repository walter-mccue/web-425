/**
 * Title: composer.class.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: creates the composer class for the enhanced-composer-app project
*/

// import statement

import { IComposer } from './composer.interface';

// exports the composer array and getComposers/getComposer functions

export class Composer {
  composers: Array<IComposer>;
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beetoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      },
      {
        composerId: 105, fullName: "Nobuo Uematsu", genre: "Modern Orchestral"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
