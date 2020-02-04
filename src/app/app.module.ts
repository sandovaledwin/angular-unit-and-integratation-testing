import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { Exercise1Component } from "./exercise-1/exercise1.component";
import { Exercise2Component } from "./exercise-2/exercise2.component";
import { Exercise3Component } from "./exercise-3/exercise3.component";
import { Exercise4Component } from "./exercise-4/exercise4.component";

const routes: Routes = [
  { path: "exercise-1", component: Exercise1Component },
  { path: "exercise-2", component: Exercise2Component },
  { path: "exercise-3", component: Exercise3Component },
  { path: "exercise-4", component: Exercise4Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
