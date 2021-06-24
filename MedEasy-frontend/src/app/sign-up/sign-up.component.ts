import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  users;
  bool;
  constructor(private http: HttpClient, private appService: AppService, private router: Router) { }
  name;
  phone;
  gender;
  authorize;
  email;
  password;
  cpassword;
  url = 'http://localhost:8080/users/addUsers';
  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['/home']);
    }
    this.appService.getusers().subscribe(data => {
          this.users = data;
        });
  }
  finalData() {
    // tslint:disable-next-line:triple-equals


   for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == this.email) {
        alert('Email is Taken');
        this.bool = 1;
        break;
      } else {
        this.bool = 0;
      }
    }

    if (this.bool == 0) {
      if (this.email != null && this.password != null && this.name != null && this.phone != null && this.gender != null && this.authorize !=null) {
        if (this.password == this.cpassword) {
          const ar = {email: this.email, password: this.password, name: this.name, phone: this.phone, gender: this.gender , authorize:this.authorize};
          return this.http.post(this.url, ar).subscribe(data => {
            alert('User Created');
            this.router.navigate(['/login']);
          });
        } else {
          alert('Re-Enter password');
        }
      } else {
        alert('fill all fields');
      }
    }

  }
}
