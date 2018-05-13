import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.css']
})
export class SelectFoodComponent implements OnInit {
  foodItems: any;
  selectedFood: any;
  foodCart: Array<{id: number, name: string, price: number; totalAmount: number}> = [];

  constructor() {
    this.foodItems = [
      {
        id: '1',
        name: 'food1',
        price: '120'
      },
      {
        id: '2',
        name: 'food2',
        price: '130'
      }
    ];
  }

  ngOnInit() {
  }

  // TODO: get food list from backend
  getFoodList() {
    // get from server and push to foodList
  }

  onFoodSelect(event) {
    this.selectedFood = event;
  }

  addFoodItem() {
    // TODO: push food item to array
    console.log('F1', this.selectedFood);
    this.foodItems.forEach((item, i) => {
      if (item.id === this.selectedFood) {
        const foodCartItem = {
          id: item.id,
          name: item.name,
          price: item.price,
          totalAmount: 0
        };
        this.foodCart.push(foodCartItem);
        return;
      }
    });
    console.log(this.foodCart);

  }

  setTotalAmount(index, amnt) {
    this.foodCart[index].totalAmount = amnt;
    console.log(this.foodCart);
    
  }

}
