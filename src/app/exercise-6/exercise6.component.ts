import { Component, OnDestroy } from '@angular/core';
import { Exercise6Service } from './exercise6.service';

@Component({
  selector: "exercise-6",
  templateUrl: "./exercise6.component.html",
  styleUrls: ["./exercise6.component.css"]
})
export class Exercise6Component {

  constructor(private authService: Exercise6Service) { }

}