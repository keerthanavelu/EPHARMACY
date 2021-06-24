import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private http: HttpClient) { }

  increment1(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/increment/1/' + id;
    return this.http.get(url, {headers});
  }

  decrement1(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});3
    const url = 'http://localhost:8080/cart/decrement/1/' + id;
    return this.http.get(url, {headers});
  }

  deleteItem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/deleteItem/' + id;
    return this.http.get(url, {headers});
  }

  getDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/items/' + id;
    return this.http.get(url, {headers});
  }

  checkout() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/checkout';
    return this.http.get(url, {headers});
  }
}
