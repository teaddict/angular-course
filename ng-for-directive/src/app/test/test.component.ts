import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> For loop </h2>
    <div *ngFor="let color of colors">
      <h2 [style.color]="color"> {{color}} </h2>
    </div>

    <h2> For loop with index number</h2>
    <div *ngFor="let color of colors; index as i">
      <h2 [style.color]="color"> {{i}}: {{color}} </h2>
    </div>

    <h2> For loop only first element has true</h2>
    <div *ngFor="let color of colors; first as f">
      <h2 [style.color]="color">{{f}} : {{color}} </h2>
    </div>

    <h2> For loop only last element has true</h2>
    <div *ngFor="let color of colors; last as l">
      <h2 [style.color]="color">{{l}} : {{color}} </h2>
    </div>

    <h2> For loop only odd(index no) elements has true</h2>
    <div *ngFor="let color of colors; index as i; odd as o">
      <h2 [style.color]="color">{{i}} : {{o}} : {{color}} </h2>
    </div>

    <h2> For loop only even(index no) elements has true</h2>
    <div *ngFor="let color of colors; index as i; even as e">
      <h2 [style.color]="color">{{i}} : {{e}} : {{color}} </h2>
    </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue", "green", "orange"];

  constructor() { }

  ngOnInit() {
  }

}
