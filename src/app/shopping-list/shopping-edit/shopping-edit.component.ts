import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredient') nameInputRef: ElementRef;
  @ViewChild('amountIngredient') amountInputRef: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(event: Event) {
    event.preventDefault();
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName,ingredientAmount);
    this.shoppinglistService.addIngredient(newIngredient);
  }

  onDeleteIngredient(event: Event) {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const deleteIngredient = new Ingredient(ingredientName,ingredientAmount);
  }

}
