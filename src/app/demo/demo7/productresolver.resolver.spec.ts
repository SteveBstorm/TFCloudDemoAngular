import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productresolverResolver } from './productresolver.resolver';

describe('productresolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productresolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
