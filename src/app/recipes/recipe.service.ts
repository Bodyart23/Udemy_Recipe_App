import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 5)
      ]),
    new Recipe('Test Recipe 2', 'Test Recipe Description 2', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Carrot', 5)
      ])
  ];
  constructor(private shoplistService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.shoplistService.addIngredients(ingredients);
  }
}
