import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Article } from '@acht/api-interfaces';

/** Book page. */
@Component({
  selector: 'acht-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  /** Articles for the book. */
  public readonly articles$: Observable<Article[]>;
  /**
   * @constructor
   * @param bookService
   */
  public constructor(
    private readonly bookService: BookService,
  ) {
    this.articles$ = this.bookService.getArticles();
  }
}
