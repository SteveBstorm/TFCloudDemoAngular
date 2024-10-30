import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  @Output() articleToRemove: EventEmitter<Article> = new EventEmitter<Article>();
  @Input() shoppingList: Article[] = [];

  removeArticle (article: Article) {
    this.articleToRemove.emit(article);
  }

}
