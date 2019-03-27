import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1> text operations </h1>
    <h2> name : {{name}}</h2>
    <h2> name | uppercase : {{name | uppercase}}</h2>
    <h2> name | lowercase : {{name | lowercase}}</h2>
    <h2> message | titlecase : {{message | titlecase}}</h2>
    <h2> message | slice:11 : {{message | slice:11}}</h2>
    <h2> location | json : {{location | json}}</h2>
    
    <h1> numbers </h1>
    <h2>5.678 | number:'1.2-3' : {{5.678 | number:'1.2-3'}}</h2>
    <h2>5.678 | number:'3.4-5' : {{5.678 | number:'3.4-5'}}</h2>
    <h2>5.678 | number:'3.1-2' : {{5.678 | number:'3.4-5'}}</h2>

    <h1> currency and percent </h1>
    <h2> 0.25 | currency : {{0.25 | currency}} </h2>
    <h2> 0.25 | currency : 'EUR' : {{0.25 | currency: 'EUR'}} </h2>
    <h2> 0.25 | percent : {{0.25 | percent}} </h2>
    <h1> dates </h1>
    <h2> today | date:'short' : {{today | date:'short'}}</h2>
    <h2> today | date:'shortDate' : {{today | date:'shortDate'}}</h2>
    <h2> today | date:'shortTime' : {{today | date:'shortTime'}}</h2>
    <h2> today | date:'medium' : {{today | date:'medium'}} </h2>
    <h2> today | date:'long' : {{today | date:'long'}}</h2>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "teaddict";
  public message = "welcome to helsinki!";
  public location = {
    "country" : "Finland",
    "city" : "Helsinki"
  };

  public today = new Date();

  constructor() { }

  ngOnInit() {
  }

}
