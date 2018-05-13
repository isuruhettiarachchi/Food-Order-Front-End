import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { SelectFoodComponent } from './select-food/select-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDetailComponent,
    SelectFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
