import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomerFormComponent } from './customerform.component';
import { DebugElement } from "@angular/core";
import { Exercise6Service } from '../exercise6.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { resolve } from 'url';
//import { MyErrorStateMatcher } from '../my-error-state-matcher';

describe('CustomerFormComponent - ', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  let htmlElement: any;

  const exercise6ServiceStub = {
    page: '',
    addCustomer: (customer) => {
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerFormComponent
      ],
      imports: [
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
  });

  it("Should be initialized?", () => {
    expect(component).toBeDefined();
  });

  it("Should cancel form", () => {
    component.cancel();
    expect(component.authService.page).toMatch(/list-customers/i);
  });

  it("Should call ngOnChanges", () => {
    const customer: any = {
      'customer': {
        currentValue: {
          email: 'test@test',
          name: 'test',
          last_name: 'test',
          gender: 'test',
          mobile: 'test',
          status: 'test'
        }
      }
    }
    component.authService.page = 'edit-customer';
    component.ngOnChanges(customer);
    expect(component.myForm.valid).toBe(true);
    expect(component.myForm.controls.email.status).toMatch(/DISABLED/);
  });

  it("Should reject to save the form", () => {
    expect(component.myForm.valid).toBe(false);
    component.save();
    expect(component.authService.page).toEqual('');
  });

  it("Should save the form", async() => {
    fixture.detectChanges();
    const inputs: Array<DebugElement> = fixture.debugElement.queryAll(By.css('input'));
    for(let i=0; i<inputs.length; i++) {
      const input = inputs[i].nativeElement as HTMLInputElement;
      if (input.name === 'email') input.value = 'test@test.com';
      if (input.name !== 'email') input.value = 'test';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
    }
    component.save();
    fixture.whenStable().then(() => {
      expect(component.myForm.valid).toBe(true);
      expect(component.authService.page).toMatch(/list-customers/i);
    });
  });

});