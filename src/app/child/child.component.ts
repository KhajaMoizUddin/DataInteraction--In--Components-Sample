import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `<h2>{{messageFromChild}}</h2>
  <h2>{{getParentValue}}</h2>
  <h2>Counter Value is : {{getCount}}</h2>
  <button (click)='callParent()'>CALLING PARENT</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() messageFromChild : string;
 @Input() getParentValue: string;
 @Input() getCount: any;
 @Output() callParentFromChildEmitter = new EventEmitter();

 firstName: string = 'Khaja';
 lastName = 'Moizuddin';

 callParent() {
   this.callParentFromChildEmitter.emit('Calling Parent From Child Component');
 }

 displayAlertMessage() {
   alert('Button Clicked From AppComponent');
 }

  constructor() { }

  ngOnInit(): void {
  }

}
