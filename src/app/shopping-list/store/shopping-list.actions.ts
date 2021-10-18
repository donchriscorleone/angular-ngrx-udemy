import { createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const AddIngredient = createAction(
  'ADD_INGREDIENT',
  props<{readonly payload: Ingredient}>()
)

export const AddIngredients = createAction(
  'ADD_INGREDIENTS',
  props<{readonly payload: Ingredient[]}>()
)

export const UpdateIngredient = createAction(
  'UPDATE_INGREDIENT',
  props<{index: number, ingredient: Ingredient}>()
)

export const DeleteIngredient = createAction(
  'DELETE_INGREDIENT',
  props<{payload: number}>()
)