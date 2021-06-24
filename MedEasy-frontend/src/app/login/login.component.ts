import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {error} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private service: AppService, private router: Router, private  authService: AuthenticationService) { }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(
      data => {
        this.service.isLoggedIn(true);
        this.router.navigate(['/home']);
      }, (err) => {
        alert('Invalid email and password');
      });
  }

  logout() {
    this.service.isLoggedIn(false);
  }
}
