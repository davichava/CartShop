import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }

 items: Product[] = [];


 
 // For add to cart
 addToCart(product: Product){
   this.items.push(product);
 }

 getItems(){
   return this.items;
 }

 clearCart(){
   this.items = [];
   return this.items;
 }

  constructor(private http:HttpClient) { }
}
