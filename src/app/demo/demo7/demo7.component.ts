import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../exercice/components/exo-shopping-service/services/product.service';
import { Product } from '../../exercice/components/exo-shopping-service/models/product.model';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component {

  liste! : Product[]

  constructor(private _router : Router, private _ps : ProductService){
    this.liste = _ps.getProducts()
  }

  navigate(id : number){
    this._router.navigate(['demo/cible', id])
  }
}
