import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['/login']);
    }
    this.service.loggedInUser().subscribe(data => {
      this.user = data;
    });
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }

}
