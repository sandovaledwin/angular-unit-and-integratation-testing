import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from 'angularfire2/firestore';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerFormComponent } from "./customerform/customerform.component";
import { CustomersComponent } from "./customers/customers.component";
import { Exercise6Component } from "./exercise6.component";
import { Exercise6Service } from "./exercise6.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

describe("Exercise6Component -", () => {
  let component: Exercise6Component;
  let fixture: ComponentFixture<Exercise6Component>;
  let htmlElement: any;

  const data = new Observable(subscriber => {
    subscriber.next([]);
  });

  const saveStub = new Promise((resolve, reject) => {
    resolve(true);
  });

  const deleteStub = new Promise((resolve, reject) => {
    resolve(true);
  });

  const docStub = {
    set: jasmine.createSpy('set').and.returnValue(saveStub),
    delete: jasmine.createSpy('delete').and.returnValue(deleteStub)
  }

  const collectionStub = {
    doc: jasmine.createSpy('doc').and.returnValue(docStub),
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  }

  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }

  const signInStub = new Promise((resolve, reject) => {
    resolve({});
  });

  const angularFireAuthStub = {
    auth: {
      signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(signInStub)
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerFormComponent,
        CustomersComponent,
        Exercise6Component,
        LoginComponent
      ],
      imports: [
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        ReactiveFormsModule
      ],
      providers: [
        Exercise6Service,
        { provide: AngularFirestore, useValue: angularFiresotreStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub  }
      ],
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialized', () => {
    expect(component).toBeDefined();
  });

  it("are the titles initialized?", () => {
    htmlElement = fixture.nativeElement.querySelector("mat-card-title");
    expect(htmlElement.textContent).toContain('Customers List');
    htmlElement = fixture.nativeElement.querySelector("mat-card-subtitle");
    expect(htmlElement.textContent).toContain('CRUD example');
  });

  it("is the customers component there?", () => {
    expect(fixture.debugElement.childNodes[0]['childNodes'][5].name).toContain('customers');
  });

});
