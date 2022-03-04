import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit { 

  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {  
  }

}
