import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoplistService: ShoppingListService) { }

  ngOnInit(): void {
   this.ingredients =  this.shoplistService.getIngredients();
   this.shoplistService.ingredientChanged.subscribe(
     (ingredients: Ingredient[]) => {
       this.ingredients = ingredients;
     }
   );
  }
}
