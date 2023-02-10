/**
 * Title: book.service.spec.ts
 * Author: Walter McCue
 * Date: 02/05/23
 * Description: ts file for the in-n-out-books project
*/

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
