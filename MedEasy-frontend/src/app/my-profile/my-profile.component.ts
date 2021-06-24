import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyProfileService} from './my-profile.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  userImg = './assets/images/user.PNG';
  user;
  disabled = true;
  url = 'http://localhost:8080/users/update';
  constructor(private myProfileService: MyProfileService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.myProfileService.getUsers().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  toggle() {
    this.disabled = false;
  }

  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.user, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/myprofile']);
      this.disabled = true;
    });
  }

}
