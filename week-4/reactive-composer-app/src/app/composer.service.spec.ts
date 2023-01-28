/**
 * Title: composer.service.spec.ts
 * Author: Walter McCue
 * Date: 01/28/23
 * Description: composer.service.spec.ts file for the di-composer-app project
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
