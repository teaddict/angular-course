import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  template: `
    <h2> {{title}} </h2>
    <h2> {{greetUser()}} </h2>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {
  public title = "binding lesson";
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.title;
  }

}
