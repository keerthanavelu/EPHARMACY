import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePageService} from './home-page.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  list;
  category1;
  filter;
  search;
  user;
  constructor(private homePageService: HomePageService, private router: Router, private route: ActivatedRoute, private service: AppService) {
  }

  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['/login']);
    }
    this.category1 = null;
    this.filter = null;
    this.homePageService.getListFromServer().subscribe((data) => {
      this.list = data;
    }),
      this.service.loggedInUser().subscribe(data => {
        this.user = data;
      });
  }

  onSelect(product) {
    this.router.navigate(['/home', product.id]);
  }

  category(cat) {
    this.category1 = cat;
    this.filter = null;
    this.homePageService.getCategory(cat).subscribe((data) => {
      this.list = data;
    });
  }

  showFilter(p1, p2) {
    if (!this.category1) {
      this.homePageService.getByPrice(p1, p2).subscribe((data) => {
        this.list = data;
      });
    } else {
      this.homePageService.getByCategoryAndPrice(this.category1, p1, p2).subscribe((data) => {
        this.list = data;
      });
    }
  }

  searchForname() {
    this.filter = null;
    this.homePageService.searchName(this.search).subscribe(data => {
      this.list = data;
    });
  }

  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
}
