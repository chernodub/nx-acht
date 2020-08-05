import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'acht-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
