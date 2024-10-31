import { Component, inject, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-exo-shopping-service',
  templateUrl: './exo-shopping-service.component.html',
  styleUrl: './exo-shopping-service.component.scss'
})
export class ExoShoppingServiceComponent implements OnInit {


  private _productService: ProductService = inject(ProductService);
  products: Product[] = [];

  productName: string = "";
  productQuantity: number = 1;

  ngOnInit (): void {
    this.products = this._productService.getProducts();
  }

  remove (productName: string) {
    this._productService.removeProduct(productName);
  }

  increment (productName: string) {
    this._productService.changeQuantity(productName);
  }

  decrement (productName: string) {
    this._productService.changeQuantity(productName, -1);
  }

  add () {
    const product: Product = { name: this.productName, quantity: this.productQuantity };
    this._productService.addProduct(product);
  }


}
