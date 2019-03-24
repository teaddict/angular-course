import { Component, OnInit } from '@angular/core';

/*
* different ways to use ng-if directive
* 1) multiple ngIf elemnent value check : value , !value
* 2) ngIf true show value else show value2
* 3) ngIf true then show value else show value2
*/

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName"> Teaddict </h2> 
    <h2 *ngIf="!displayName"> Name is hidden </h2> 

    <h2 *ngIf="cityName; else elseBlock"> Helsinki </h2>
    <ng-template #elseBlock>
      <h2> City is hidden </h2>
    </ng-template>

    <div *ngIf="showCountry; then thenBlock; else hideBlock"> </div>

    <ng-template #thenBlock>
      <h2> Finland </h2>
    </ng-template>

    <ng-template #hideBlock>
      <h2> Country is hidden </h2>
    </ng-template>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public displayName = true;
  public cityName = false;
  public showCountry = true;
  constructor() { }

  ngOnInit() {
  }

}
