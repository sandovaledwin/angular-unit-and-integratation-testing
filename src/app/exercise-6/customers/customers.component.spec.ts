import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomersComponent } from './customers.component';
import { Exercise6Service } from '../exercise6.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

describe('CustomersComponent - ', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  const dataStub = new Promise((resolve, reject) => {
    resolve(true);
  });

  const exercise6ServiceStub = {
    customer: null,
    page: '',
    removeCustomer: jasmine.createSpy('removeCustomer').and.returnValue(dataStub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomersComponent
      ],
      imports: [
        MatIconModule,
        MatTableModule
      ],
      providers: [
        { provide: Exercise6Service, useValue: exercise6ServiceStub }
      ]
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
  });

  it("Should be initialized?", () => {
    expect(component).toBeDefined();
  });

  it("Should change the state after call add() method?", () => {
    component.add();
    expect(component.authService.page).toMatch(/add-customer/);
  });

  it("Should change the state after call edit() method?", () => {
    component.edit({});
    expect(component.authService.page).toMatch(/edit-customer/);
  });

  it("Should call removeCustomer() method?", () => {
    component.delete('test@test.com');
    expect(exercise6ServiceStub.removeCustomer).toHaveBeenCalled();
  });

});