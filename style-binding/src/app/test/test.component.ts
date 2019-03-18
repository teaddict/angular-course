import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome </h2>
    <h2 [style.color]="'red'"> THIS TEXT IS RED </h2>
    <h2 [style.color]="hasError ? 'red' :  'green'"> THIS TEXT IS GREEN </h2>
    <h2 [style.color]="highlight"> THIS TEXT IS ORANGE </h2>
    <h2 [ngStyle]="titleStyles"> THIS TEXT IS BLUE AND ITALIC </h2>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public hasError = false;
  public highlight = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };
  
  constructor() { }

  ngOnInit() {
  }

}
