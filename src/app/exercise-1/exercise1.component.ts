import { Component } from '@angular/core';

@Component({
  selector: 'exercise-1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  
  title : string = 'Hello World - Testing';
  
  changeTitle() : void {
    this.title = 'Hello dev team!';
  }

}