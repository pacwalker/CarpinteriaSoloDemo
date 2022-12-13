import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Typescript product interface
interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  // Change to this URL: https://YOUR-FIREBASE-PROJECT.firebaseio.com/products.json
  productsUrl = 'assets/products.json';
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.products$ = this.getProducts();
  }
  // Method that obtains the products from RTDB
  getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }

}
