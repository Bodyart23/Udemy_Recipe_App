import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import * as  ShoppingListAction from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

   // private recipes: Recipe[] = [
   //   new Recipe('Test Recipe', 'Test Recipe Description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
   //     [
   //       new Ingredient('Meat', 1),
   //       new Ingredient('Potato', 5)
   //     ]),
   //   new Recipe('Test Recipe 2', 'Test Recipe Description 2', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
   //     [
   //       new Ingredient('Bread', 1),
   //       new Ingredient('Carrot', 5)
   //     ])
   // ];
  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromApp.AppState>
  ) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoplistService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
