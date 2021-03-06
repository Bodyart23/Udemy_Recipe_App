import {Ingredient} from '../../shared/ingredient';
import {Action} from '@ngrx/store';
import * as  ShoppingListAction from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListAction.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT:
      return {...state, ingredients: [...state.ingredients, action.payload]};

    case ShoppingListAction.ADD_INGREDIENTS:
      return {...state, ingredients: [...state.ingredients, ...action.payload]};

    case 'UPDATE_INGREDIENT':
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {...ingredient, ...action.payload};
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {...state, ingredients: updatedIngredients, editedIngredientIndex: -1, editedIngredient: null};

    case 'DELETE_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case 'START_EDIT':
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      };
    case 'STOP_EDIT':
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
