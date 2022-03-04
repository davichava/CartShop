import { Component, OnInit, } from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 product = products;
 
  constructor() { }

  share(){
    window.alert('the products has been shared!!');
  }

  onNotify(){
    window.alert('you will be notified when product  goeson sale');
  }

  ngOnInit(): void {
  }

}
