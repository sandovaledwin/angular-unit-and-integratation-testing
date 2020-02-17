import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

import { Exercise5Component } from "./exercise5.component";
import { FirstLetterUpperCasePipe } from './first-letter-upper-case.pipe';

describe("Implementing Pipes in Components - ", () => {
  let component: Exercise5Component;
  let fixture: ComponentFixture<Exercise5Component>;
  let htmlElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise5Component, FirstLetterUpperCasePipe],
      imports: [BrowserAnimationsModule, FormsModule, MatCardModule, MatInputModule]
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5Component);
    component = fixture.componentInstance;
  });

  it("Transform -> welcome everyone -> Welcome Everyone", () => {
    fixture.detectChanges();
    htmlElement = fixture.nativeElement.querySelector("input");
    htmlElement.value = 'welcome everyone';
    htmlElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    htmlElement = fixture.nativeElement.querySelector("mat-card-content");
    expect(htmlElement.textContent).toContain('Welcome Everyone');
  });

});