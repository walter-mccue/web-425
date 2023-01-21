/**
 * Title: signin.guard.spec.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: app guarding for the enhanced-secured-profile-app project
*/

import { TestBed } from '@angular/core/testing';

import { SigninGuard } from './signin.guard';

describe('SigninGuard', () => {
  let guard: SigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
