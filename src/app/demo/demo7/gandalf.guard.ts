import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from '../../exercice/components/exo-shopping-service/services/product.service';
import { inject } from '@angular/core';

export const gandalfGuard: CanActivateFn = (route, state) => {
  let ps : ProductService = inject(ProductService)
  let id : number = route.params['id']
  let router : Router = inject(Router)
  if(ps.getProducts()[id] != undefined)
    return true;
  router.navigate(['404'])
  return false;
};
