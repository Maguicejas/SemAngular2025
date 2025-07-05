import { Component, OnInit } from '@angular/core';
import {Product} from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
 
 products: Product[]=[];
  
constructor(
  private cart: ProductCartService,
  private productsDataService:ProductDataService,
){
  
}

ngOnInit(): void {
 this.productsDataService.getAll()
 .subscribe(products => this.products=products);
}

addToCart(product:Product):void{
  this.cart.addToCart(product);
  product.stock -= product.quantity;
  product.quantity=0;
}

maxReached(m:string){
  alert(m);
}

}

