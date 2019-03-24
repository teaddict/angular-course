import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color]="'red'"> You picked red color </div>
      <div *ngSwitchCase="'blue'" [style.color]="'blue'"> You picked blue color </div>
      <div *ngSwitchCase="'green'" [style.color]="'green'"> You picked green color </div>
      <div *ngSwitchDefault> You picked default color </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  
  public color = "red";

  constructor() { }

  ngOnInit() {
  }

}
