import { ResolveFn } from '@angular/router';
import { Product } from '../../exercice/components/exo-shopping-service/models/product.model';
import { ProductService } from '../../exercice/components/exo-shopping-service/services/product.service';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = (route, state) => {
  let ps : ProductService = inject(ProductService)
  let id : number = route.params['id']
  return ps.getProducts()[id]
};
