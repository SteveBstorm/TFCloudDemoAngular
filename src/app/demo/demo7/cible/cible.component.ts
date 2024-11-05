import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../exercice/components/exo-shopping-service/services/product.service';
import { Product } from '../../../exercice/components/exo-shopping-service/models/product.model';

@Component({
  selector: 'app-cible',
  templateUrl: './cible.component.html',
  styleUrl: './cible.component.scss'
})
export class CibleComponent {

  myId! : number
  currentProduct! : Product
  constructor(private _ar : ActivatedRoute/*, private _ps : ProductService*/){
    // this.myId = _ar.snapshot.params["id"]
    // this.currentProduct = _ps.getProducts()[this.myId]
    // Sans le resolver



    this.currentProduct = _ar.snapshot.data['monproduit']
    /*Utilisation du resolver*/
  }
}
