import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {


  cartList$!: Observable<Product[]>;

  constructor(private cart: ProductCartService){
  }
  ngOnInit(): void {
    this.cartList$ = this.cart.cartList.asObservable();
  }
 

}
