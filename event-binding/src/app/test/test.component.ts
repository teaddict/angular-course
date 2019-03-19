import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome </h2>
    <button (click)="onClick()">onClick</button>
    <button (click)="onClickWithEvent($event)">onClickWithEvent</button>
    <button (click)="title = 'a new text title' ">assign new text</button>
    {{title}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public title = ""

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.title = "button clicked";
  }

  onClickWithEvent(event) {
    this.title = "event type is " + event.type;
  }

}
