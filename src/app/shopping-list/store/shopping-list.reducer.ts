import { Action, createReducer, on, State } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

interface InitialState {
  ingredients: Ingredient[];
}

const initialState: InitialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)]
};

const _shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.AddIngredient, (state, {payload}) => ({...state, ingredients: [...state.ingredients, payload]})),
  on(ShoppingListActions.AddIngredients, (state, {payload}) => ({...state, ingredients: [...state.ingredients, ...payload]}))
)

export function shoppingListReducer(state: InitialState | undefined, action: Action) {
  return _shoppingListReducer(state, action);
}