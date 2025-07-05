import { Injectable } from '@angular/core';
import { Product } from './products-list/Product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private_cartList:Product[]=[];
  cartList: BehaviorSubject <Product[]>= new BehaviorSubject(this.private_cartList);

  constructor() { }

  addToCart(product: Product) {
   let item= this.private_cartList.find((v1)=> v1.name == product.name)
   if(!item){
    this.private_cartList.push({... product});
   }else{
    item.quantity += product.quantity;
   }
    console.log(this.private_cartList);
    this.cartList.next(this.private_cartList)
  }

}
