import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { Shipping } from './shippings';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  getShippingPrices(){
    return this.http.get<{id: number, type: string, price: number}[]>
    ('/assets/shipping.json')
  }
// items for Product
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
// ----------------------------------

  //items for shippings price
  item: Shipping[] = [];

  addToShipping(shipping: Shipping){
    this.item.push(shipping);
  }
 
  getItem(){
    return this.item;
  }
 
  clearShipping(){
    this.item = [];
    return this.item;
  }


  constructor(private http:HttpClient) { }
}
