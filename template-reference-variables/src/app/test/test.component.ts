import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome Template Reference Variables</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(message) {
    console.log(message);
  }

}
