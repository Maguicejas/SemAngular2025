import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products-list/Product';



@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
   constructor(){}
  
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number>=new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity():void{
    if(this.quantity<this.max){
     this.quantity++;
     this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se supero el máximo");
    }
  }

  downQuantity():void{
    if(this.quantity>0){
     this.quantity--;
     this.quantityChange.emit(this.quantity);
    }
   
  }

  changeQuantity(event:KeyboardEvent):void{
    event.preventDefault();
    this.quantityChange.emit(this.quantity);
  }
}
