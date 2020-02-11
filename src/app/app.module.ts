import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { CustomerFormComponent } from "./exercise-6/customerform/customerform.component";
import { CustomersComponent } from "./exercise-6/customers/customers.component";
import { Exercise1Component } from "./exercise-1/exercise1.component";
import { Exercise2Component } from "./exercise-2/exercise2.component";
import { Exercise3Component } from "./exercise-3/exercise3.component";
import { Exercise4Component } from "./exercise-4/exercise4.component";
import { Exercise5Component } from "./exercise-5/exercise5.component";
import { Exercise6Component } from "./exercise-6/exercise6.component";
import { LoginComponent } from "./exercise-6/login/login.component";


import { Exercise6Service } from "./exercise-6/exercise6.service";

import { FirstLetterUpperCasePipe } from './exercise-5/first-letter-upper-case.pipe';

const routes: Routes = [
  { path: "exercise-1", component: Exercise1Component },
  { path: "exercise-2", component: Exercise2Component },
  { path: "exercise-3", component: Exercise3Component },
  { path: "exercise-4", component: Exercise4Component },
  { path: "exercise-5", component: Exercise5Component },
  { path: "exercise-6", component: Exercise6Component }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomersComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    Exercise5Component,
    Exercise6Component,
    FirstLetterUpperCasePipe,
    LoginComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Exercise6Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
