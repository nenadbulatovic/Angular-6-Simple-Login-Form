import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Login = { userid: "admin", password: "nenad123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = '/home';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    if (this.loginForm.invalid) {
      let user = this.loginForm.value.userid;
      let pass = this.loginForm.value.password;
      if (user == "" && pass == "") { this.message = "UserId and Password cannot be empty"; }
      else if (user == "") { this.message = "UserId cannot be empty"; }
      else if (pass == "") { this.message = "Password cannot be empty"; }
      else { this.message = "Please check your userid and password"; }
      return;
    }
    else {
      if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }

}
