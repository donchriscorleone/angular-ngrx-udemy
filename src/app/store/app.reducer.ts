import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer";
import * as fromAuth from '../auth/store/auth.reducer'
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    shoppingList: fromShoppingList.ShoppingState;
    auth: fromAuth.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
  }