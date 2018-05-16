import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.css']
})
export class SelectFoodComponent implements OnInit {
  foodItems: any = [];
  selectedFood: any;
  foodCart: Array<{id: number, name: string, price: number; totalAmount: number}> = [];
  totalBillAmount: number;

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getFoodList().then(res => {
      this.foodItems = res;
    });
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
    this.checkDuplicateCartItems().then((res) => {
      if (res === true) {
        // TODO: show duplcaite food cart item alert
        console.log('duplciate item');
      } else if (res === false) {
        this.foodItems.forEach((elem, i) => {
          if (elem.id === this.selectedFood) {
            const foodCartItem = {
              id: elem.id,
              name: elem.name,
              price: elem.price,
              totalAmount: 0
            };
            this.foodCart.push(foodCartItem);
            return;
          }
        });
        console.log(this.foodCart);
      }
    });
  }

  removeFromFoodCart(index) {
    if (index > -1) {
      this.foodCart.splice(index, 1);
    }
  }

  checkDuplicateCartItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.foodCart.forEach(elem => {
        if (elem.id === this.selectedFood) {
          resolve(true);
        }
      });
      resolve(false);
    });
  }

  setTotalAmount(index, amnt) {
    this.foodCart[index].totalAmount = amnt;
    // console.log(this.foodCart);
    this.setTotalBillAmount();
  }

  setTotalBillAmount() {
    this.totalBillAmount = 0;
    this.foodCart.forEach((item) => {
      this.totalBillAmount = this.totalBillAmount + item.totalAmount;
    });
  }

}
