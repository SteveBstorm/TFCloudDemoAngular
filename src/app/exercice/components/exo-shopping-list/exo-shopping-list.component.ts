import { Component, ElementRef, ViewChild } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrl: './exo-shopping-list.component.scss'
})
export class ExoShoppingListComponent {

  @ViewChild('articleNameInput') articleNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('articlePriceInput') articlePriceInput!: ElementRef<HTMLInputElement>;

  articles: Article[] = [
    { name: 'Article 1', price: 1010110.99 },
    { name: 'Article 2', price: 5.9 },
    { name: 'Article 3', price: 7.99 },
  ];

  articleName: string = "";
  articlePrice: number = 0;

  addArticle () {
    if (this.articleName.trim() === "" || this.articlePrice <= 0) return;
    const article: Article = {
      name: this.articleName,
      price: this.articlePrice
    };
    this.articles.push(article);

    this.articleName = "";
    this.articlePrice = 0;

    this.articleNameInput.nativeElement.focus();
  }

  removeArticle (article: Article) {
    const index = this.articles.indexOf(article);
    if (index === -1) return;
    this.articles.splice(index, 1);
  }

  nextInput () {
    this.articlePriceInput.nativeElement.focus();
    this.articlePriceInput.nativeElement.value = "";
  }

}
