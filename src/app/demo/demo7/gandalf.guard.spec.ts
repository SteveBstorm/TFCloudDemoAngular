import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gandalfGuard } from './gandalf.guard';

describe('gandalfGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gandalfGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
