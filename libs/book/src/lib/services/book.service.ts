import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Article } from "@acht/api-interfaces";

/** Book service. */
@Injectable({
    providedIn: 'root',
})
export class BookService {
  /**
   * @constructor
   * @param httpClient Http client.
   */
  public constructor(
    private readonly httpClient: HttpClient,
  ) {}

  /** Get articles for the book. */
  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('/api/articles');
  }
}