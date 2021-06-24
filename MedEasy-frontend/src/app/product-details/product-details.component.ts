import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId;
user;
  disabled = true;
  url = 'http://localhost:8080/api/addDetails';
  constructor(private productDetailsService: ProductDetailsService, private appService: AppService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  productDetail;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.productId = id;
    }),
      this.productDetailsService.getDetails(this.productId).subscribe((data) => {
        this.productDetail = data;
      }),
      this.appService.loggedInUser().subscribe(data => {
        this.user = data;
      });
  }

  addItemsinCart() {
    this.productDetailsService.addToCart(this.productId).subscribe((data) => {
      this.productDetail = data;
      setTimeout(() => {
        console.log('added to cart');
      }, 1000);
      this.router.navigate(['/mycart']);
    });
  }

  toggle() {
    this.disabled = false;
  }

  addProduct() {
    if (this.productDetail.name != null && this.productDetail.brand != null && this.productDetail.category != null && this.productDetail.image != null && this.productDetail.description != null && this.productDetail.quantity != null && this.productDetail.unitPrice != null) {
      // tslint:disable-next-line:max-line-length
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post(this.url, this.productDetail, {headers}).subscribe( data => {
        console.log(data);
        alert('Changes Saved');
        this.router.navigate(['/home']);
      });
    } else {
      alert('Fill All the Fields');
    }
  }

}
