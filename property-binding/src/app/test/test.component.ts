import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome to property binding! </h2>
    <input [id]="myId" type="text" value="PropertyBinding">
    <input id="{{myId}}" type="text" value="PropertyBinding">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="PropertyBinding">
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="PropertyBinding">
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public myId = "myTestId";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
