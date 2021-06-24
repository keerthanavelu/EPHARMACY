import { Component, OnInit } from '@angular/core';
import {OrderHistoryService} from './order-history.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  history;
  constructor(private orderHistoryService: OrderHistoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderHistoryService.getOrderHistory().subscribe((data) => {
      this.history = data;
      console.log(data);
    });
  }

}
