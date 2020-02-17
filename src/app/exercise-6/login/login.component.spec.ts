import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Exercise6Service } from '../exercise6.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from './login.component';


describe('Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const dataStub = new Promise((resolve, reject) => {
    resolve(null);
  });

  const exercise6ServiceStub = {
    customer: null,
    page: '',
    login: jasmine.createSpy('login').and.returnValue(dataStub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        FormsModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: Exercise6Service, useValue: exercise6ServiceStub }
      ]
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it("Should be initialized?", () => {
    expect(component).toBeDefined();
  });

  it("Should call login() method?", () => {
    component.login();
    expect(exercise6ServiceStub.login).toHaveBeenCalled();
  });

});