import { Component, Input, SimpleChanges } from '@angular/core';
import { Exercise6Service } from '../exercise6.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../my-error-state-matcher';

@Component({
  selector: 'customer-form',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerFormComponent {

  @Input() customer;

  myForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(public authService: Exercise6Service) { }

  ngOnChanges(value: SimpleChanges) {
    this.myForm.setValue(value.customer.currentValue);
    if (this.authService.page === 'edit-customer') {
      this.myForm.controls.email.disable();
    }
  }

  cancel() {
    this.authService.page = 'list-customers';
  }

  save() {
    if (this.myForm.valid) {
      this.authService.addCustomer(this.myForm.getRawValue())
        .then(() => {
          this.authService.page = 'list-customers';
        })
        .catch((error) => {
          console.log('Error at moment to update the record');
        });
    }
  }

}