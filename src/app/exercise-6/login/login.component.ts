import { Component, Input } from '@angular/core';
import { Exercise6Service } from '../exercise6.service';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../my-error-state-matcher';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
      Validators.required
  ]);
  error = null;
  matcher = new MyErrorStateMatcher();

  constructor(private authService: Exercise6Service) { }

  login() {
    this.authService.login(
      this.email.value,
      this.password.value
    ).then((result) => {
      this.authService.isLogin = true;
      this.error = null;
      this.authService.loadCustomers();
    }).catch((error) => {
      this.authService.isLogin = false;
      this.error = error;
    });
  }

}