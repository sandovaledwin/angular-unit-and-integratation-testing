import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Exercise6Service {

  customer = null;
  customers = [];
  displayedColumns = ['name', 'last_name', 'gender', 'status', 'email'];
  isLogin = false;
  page = 'list-customers';

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
      this.getCustomers$().subscribe(
        (data) => {
          console.log('Exercise6Service');
          console.log(data);
          this.customers = data;
          this.isLogin = true;
        }
      );
  }

  addCustomer(customer) {
    return this.db.collection('/customers').doc(customer.email).set(customer);
  }

  getCustomers$() {
    return this.db.collection('/customers').valueChanges();
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  removeCustomer(email) {
    return this.db.collection('/customers').doc(email).delete();
  }

}