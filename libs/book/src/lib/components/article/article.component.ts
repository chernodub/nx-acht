import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from '@acht/api-interfaces';

/** Article component. */
@Component({
  selector: 'acht-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {

  /** Article. */
  @Input()
  public article: Article;

}
