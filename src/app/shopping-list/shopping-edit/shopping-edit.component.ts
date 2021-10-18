import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp  from 'src/app/store/app.reducer';

import { Ingredient } from '../../shared/ingredient.model';

import * as shoppingActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe((stateData) => {
      if (stateData.editedIngredientIndex >- 1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.editedItemIndex = stateData.editedIngredientIndex;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      } else {
        this.editMode = false;
      }
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(shoppingActions.UpdateIngredient({ingredient: newIngredient}))
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(shoppingActions.AddIngredient({payload: newIngredient}))
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(shoppingActions.StopEdit())
  }

  onDelete() {
    this.store.dispatch(shoppingActions.DeleteIngredient({payload: this.editedItemIndex}))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(shoppingActions.StopEdit())
  }

}
