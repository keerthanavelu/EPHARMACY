import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name;
  brand;
  image;
  category;
  description;
  quantity;
  price;
  url = 'http://localhost:8080/api/addDetails';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

    addProduct() {
    // tslint:disable-next-line:max-line-length
    if (this.name != null && this.brand != null && this.category != null && this.image != null && this.description != null && this.quantity != null && this.price != null) {
      // tslint:disable-next-line:max-line-length
      const ar = {name: this.name, brand: this.brand, category: this.category, image: this.image, description: this.description, quantity: this.quantity, unitPrice: this.price};
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post(this.url, ar, {headers}).subscribe( data => {
        console.log(data);
        alert('Product Added');
        this.router.navigate(['/home']);
      });
    } else {
      alert('Fill All the Fields');
    }
  }

}
