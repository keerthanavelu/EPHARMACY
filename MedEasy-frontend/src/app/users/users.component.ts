import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users;

  ngOnInit() {
    this.usersService.getusers().subscribe(data => {
      this.users = data;
    });
  }

}
