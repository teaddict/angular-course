import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> {{message}} </h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  // parentData is from parent component html
  @Input('parentData') public message;
  // this EventEmitter should be from @angular/core
  // stupid auto import adds from 'events'
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit("This is a message from Child Component!");
  }

}
