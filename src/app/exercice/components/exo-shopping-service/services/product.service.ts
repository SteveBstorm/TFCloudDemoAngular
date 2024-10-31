import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { name: 'Tomate', quantity: 3 },
    { name: 'Carotte', quantity: 2 },
    { name: 'Poivron', quantity: 1 },
    { name: 'Oignon', quantity: 4 },
    { name: 'Ail', quantity: 5 },
  ];

  constructor () { }

  getProducts (): Product[] {
    return this.products;
  }

  addProduct (product: Product): void {
    const index = this.getIndex(product.name);
    if (index == -1) this.products.push(product);
    else this.changeQuantity(product.name, product.quantity);
  }

  removeProduct (productName: string): void {
    const index = this.getIndex(productName);
    if (index != -1) this.products.splice(index, 1);
  }

  changeQuantity (productName: string, quantity: number = 1) {
    const index = this.getIndex(productName);
    this.products[index].quantity += quantity;

    if (this.products[index].quantity === 0) this.removeProduct(productName);
  }

  private getIndex (productName: string): number {
    return this.products.findIndex(
      p => p.name.trim().toLowerCase() === productName.trim().toLowerCase()
    );
  }

}
