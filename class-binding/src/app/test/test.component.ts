import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome {{title}} </h2>
    <h2 class="text-success"> A successful text! </h2>
    <h2 [class]="successClass"> A successful text! </h2>
    <h2 [class.text-danger]="hasError"> DANGER DANGER! </h2>
    <!-- ngClass always you dynamically apply styles !-->
    <h2 [ngClass]="messageClasses"> It should be red and italic </h2>
    `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
