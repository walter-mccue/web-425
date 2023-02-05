/**
 * Title: book.service.ts
 * Author: Walter McCue
 * Date: 02/05/23
 * Description: ts file for the in-n-out-books project
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '088673687',
        title: 'Armor',
        description: 'A military science fiction novel where soldiers use exoskeletons to fight insect-like alien enemies. The book also exemplifies the psychological effects of violence and war on human beings.',
        numOfPages: 432,
        authors: ['John Steakley']
      },
      {
        isbn: '9780451450333',
        title: 'Vampire$',
        description: "A dark fantasy horror novel where a company called Vampire$ Inc has commercialized vampire hunting. The organization is funded by large payments from the vampires potential victims/families and secretly supported by the Roman Catholic Church",
        numOfPages: 357,
        authors: ['John Steakley']
      },
      {
        isbn: '0345451325',
        title: 'Halo: The Fall of Reach',
        description: "A military science fiction novel set in the halo universe. This is a prelude to Halo:Combat Evolved, the first game in the series, which takes place in the 26th century. The novel details the events that lead up to the game as well as the creation of the SPARTAN-II soldiers.",
        numOfPages: 352,
        authors: ['Eric Nylund']
      },
      {
        isbn: '978078611571',
        title: 'The Doom Stone',
        description: "Jackson, a 15-year old teen, witnesses a creature mauling a man at Stonehenge. The boy learns that his aunt is leading a military hunt for the intelligent creature. Jackson decides to join in on the hunt unbeknownst to his aunt.",
        numOfPages: 192,
        authors: ['Paul Zindel']
      },
      {
        isbn: '9780743211383',
        title: 'Dreamcatcher',
        description: "A science fiction horror novel by renowned author Stephen King. The book features, aliens, suspense, mystery, and a bit of the supernatural, a must read for any scifi horror fan.",
        numOfPages: 620,
        authors: ['Stephen King']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
