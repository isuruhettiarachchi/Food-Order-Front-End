import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input() foodName: string;
  @Input() foodPrice: number;

  @Output() getTotalAmount: EventEmitter<any> = new EventEmitter();

  private totalAmount: number;

  constructor() {
    this.totalAmount = 0;
  }

  // TODO: accept only positive integers
  calculateTotal(qty: number) {
    this.totalAmount = this.foodPrice * qty;
    this.getTotalAmount.emit(this.totalAmount);
  }

  ngOnInit() {
  }

}
