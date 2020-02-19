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
  subscription = null;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {

  }

  addCustomer(customer) {
    return this.db.collection('/customers').doc(customer.email).set(customer);
  }

  getCustomers$() {
    return this.db.collection('/customers').valueChanges();
  }

  loadCustomers() {
    if (this.isLogin) {
      this.subscription = this.getCustomers$().subscribe(
        (data) => {
          console.log('Exercise6Service: Loading data');
          console.log(data);
          this.customers = data;
          this.isLogin = true;
        }
      );
    }
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.removeSubscription();
    return this.afAuth.auth.signOut();
  }

  removeCustomer(email) {
    return this.db.collection('/customers').doc(email).delete();
  }

  removeSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}