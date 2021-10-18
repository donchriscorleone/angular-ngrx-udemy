import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromShoppingListActions from '../shopping-list/store/shopping-list.actions'
import * as fromShoppingListReducer from '../shopping-list/store/shopping-list.reducer'

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private store: Store<fromShoppingListReducer.AppState>) {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.store.dispatch(fromShoppingListActions.UpdateIngredient({ingredient: newIngredient}))
  }

  deleteIngredient(index: number) {
    this.store.dispatch(fromShoppingListActions.DeleteIngredient({payload: index}));
  }
}
