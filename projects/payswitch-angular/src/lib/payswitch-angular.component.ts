import { Component, OnInit } from '@angular/core';

interface MyWindow extends Window {
  PayswitchPopup: any;
}
declare var window: MyWindow;

@Component({
  selector: 'payswitch-angular',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class PayswitchAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
