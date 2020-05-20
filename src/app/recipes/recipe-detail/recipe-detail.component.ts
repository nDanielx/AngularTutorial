import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  navToShoppingList() {
    this.recipeService.onAddIngredientToShoppingList(this.recipe.ingredients);
  }
}
