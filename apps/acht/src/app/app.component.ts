import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Letter } from "@acht/api-interfaces";

/** App component. */
@Component({
  selector: 'acht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /** Letters data. */
  public readonly letters$ = this.http.get<Letter[]>('/api/letters');
  constructor(private http: HttpClient) {}
}
