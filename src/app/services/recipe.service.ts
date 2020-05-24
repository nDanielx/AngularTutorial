import { Recipe } from '../recipes/recipe.module';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries',2)
      ]
    ),
    new Recipe(
      'Hello world',
      'let say hi',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Rice',10)
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(index: number) {
    return this.recipes[index]
  }

  onAddIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredientsFromDetail(ingredient)
  }
}