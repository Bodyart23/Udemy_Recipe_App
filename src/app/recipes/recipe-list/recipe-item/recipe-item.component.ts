import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor(private recipeServise: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
   this.recipeServise.recipeSelected.emit(this.recipeItem);
  }
}
