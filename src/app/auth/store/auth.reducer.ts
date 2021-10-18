import { createReducer, Action } from "@ngrx/store";
import { User } from "../user.model";

export interface UserState {
    user: User

}

const initialState: UserState = {
    user: null,
}

const _reducer = createReducer(
    initialState,
)

export function authReducer(state: UserState, action: Action) {
    return _reducer(state, action);
}