import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  getListFromServer() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/items';
    return this.http.get(url, {headers});
  }

  getCategory(var1) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/category/' + var1;
    return this.http.get(url, {headers});
  }

  getByCategoryAndPrice(category, price1, price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/' + category + '/' + price1 + '/' + price2;
    return this.http.get(url, {headers});
  }

  getByPrice(price1, price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/' + price1 + '/' + price2;
    return this.http.get(url, {headers});
  }

  searchName(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/search/' + name;
    return this.http.get(url, {headers});
  }
}
