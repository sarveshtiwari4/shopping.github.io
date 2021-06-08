import { TestBed } from '@angular/core/testing';

import { Manager1Guard } from './manager1.guard';

describe('Manager1Guard', () => {
  let guard: Manager1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Manager1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
