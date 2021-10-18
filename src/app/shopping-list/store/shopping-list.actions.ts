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
  props<{ingredient: Ingredient}>()
)

export const DeleteIngredient = createAction(
  'DELETE_INGREDIENT',
  props<{}>()
)

export const StartEdit = createAction(
  'START_EDIT',
  props<{payload: number}>()
)

export const StopEdit = createAction(
  'STOP_EDIT',
)