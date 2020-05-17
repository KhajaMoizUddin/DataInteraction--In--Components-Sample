import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {ChildComponent} from '../app/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  messageFromParent = 'Displaying From parent Component';
  messageToChild = 'Displayed from Child Component';
  displayChildValue = '';
  callingFromChild = '';
  @ViewChild(ChildComponent) child : ChildComponent;

  Counter = 1;

  callingChild() {
    this.Counter = this.Counter + 1;
   this.displayChildValue ='Displayed From Parent Component';
  }

  ngOnInit() {console.log(this.child)} //Gives Undefines result as it is not a known type of ngOnInit 
  ngAfterViewInit() {console.log(this.child)} //ViewChild is Part of ngAfterViewInit, Complete Object of ChildComponent can be captured.

  ParentMethod(data) {
    this.callingFromChild = data;
  }
}
