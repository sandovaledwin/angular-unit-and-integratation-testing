import { Component, Input } from '@angular/core';
import { Exercise6Service } from '../exercise6.service';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  @Input() customers;
  @Input() columnNames;

  constructor(public authService: Exercise6Service) { }

  add() {
    this.authService.page = 'add-customer';
    this.authService.customer = {
      email: '',
      name: '',
      last_name: '',
      gender: '',
      mobile: '',
      status: ''
    }
  }

  edit(customer) {
    this.authService.page = 'edit-customer';
    this.authService.customer = customer;
  }

  delete(email) {
    this.authService.removeCustomer(email)
      .then(() => { console.log('Document successfully deleted'); })
      .catch((error) => { console.log(error) });
  }

}