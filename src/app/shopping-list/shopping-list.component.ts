import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { type } from 'os';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteIngrdient(ingredient: Ingredient) {
    this.ingredients.filter(itemName => itemName.name !== ingredient.name);
    console.log(this.ingredients)
  }
}
