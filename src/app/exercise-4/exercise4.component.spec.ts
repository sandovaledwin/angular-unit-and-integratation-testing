import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from '@angular/core';

import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";

import { Exercise4Component } from "./exercise4.component";

describe("Star Wars Planets", () => {
  let component: Exercise4Component;
  let fixture: ComponentFixture<Exercise4Component>;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise4Component],
      imports: [MatCardModule, MatChipsModule]
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise4Component);
    component = fixture.componentInstance;
  });

  it("Is the title assigned ?", () => {
    fixture.detectChanges();
    htmlElement = fixture.nativeElement.querySelector("mat-card-title");
    expect(htmlElement.textContent).toContain('Star Wars');
  });

  it("Is the sub title assigned ?", () => {
    fixture.detectChanges();
    htmlElement = fixture.nativeElement.querySelector("mat-card-subtitle");
    expect(htmlElement.textContent).toContain('Planets List');
  });

  it("Expect to render 10 planets ?", () => {
    const cardDe: DebugElement = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    fixture.detectChanges();
    const cards = cardEl.querySelectorAll("mat-card").length;
    expect(cards).toBe(11);
  });

});
