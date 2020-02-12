import { Exercise6Service } from './exercise6.service';
import { TestBed } from "@angular/core/testing";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

describe("Service - ", () => {
  let service: Exercise6Service;
  let angularFirestore;
  let customer: any = {
    name: '',
    last_name: '',
    gender: '',
    mobile: '',
    status: ''
  };

  const input = [];

  const data = new Observable(subscriber => {
    subscriber.next(input);
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

  //auth.signInWithEmailAndPassword(email, password);

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        Exercise6Service,
        { provide: AngularFirestore, useValue: angularFiresotreStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub  }
      ]
    });

    service = TestBed.get(Exercise6Service);
    //angularFirestore = TestBed.get(AngularFirestore);
  });

  it('Should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('successfully called addCustomer()', () => {
    service.addCustomer(customer);
    expect(docStub.set).toHaveBeenCalled();
  });

  it('successfully called removeCustomer()', () => {
    service.removeCustomer(customer.email);
    expect(docStub.delete).toHaveBeenCalled();
  });

  it('successfully called login()', () => {
    console.log(service);
    service.login(customer.email, '');
    expect(angularFireAuthStub.auth.signInWithEmailAndPassword).toHaveBeenCalled();
  });

});