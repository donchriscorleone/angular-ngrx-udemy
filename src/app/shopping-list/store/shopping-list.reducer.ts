import { Action, createReducer, on, State } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: ShoppingState
}

interface ShoppingState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient
  editedIngredientIndex: number,
}

const initialState: ShoppingState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

const _shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.AddIngredient, (state, {payload}) => ({...state, ingredients: [...state.ingredients, payload]})),
  on(ShoppingListActions.AddIngredients, (state, {payload}) => ({...state, ingredients: [...state.ingredients, ...payload]})),
  on(ShoppingListActions.UpdateIngredient, (state, payload) => {
    const ingredient = state.ingredients[payload.index];
    const updatedIngredient = {
      ...ingredient, ...payload.ingredient
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredient[payload.index] = updatedIngredient;

    return ({...state, ingredients: updatedIngredients})
  }),
  on(ShoppingListActions.DeleteIngredient, (state, {payload}) => ({...state, ingredients: state.ingredients.filter((ig, ind) => ind !== payload)}))
)

export function shoppingListReducer(state: ShoppingState | undefined, action: Action) {
  return _shoppingListReducer(state, action);
}