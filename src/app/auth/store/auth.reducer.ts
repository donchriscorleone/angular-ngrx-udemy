import { createReducer, Action, on } from "@ngrx/store";
import { User } from "../user.model";
import * as fromAuthActions from './auth.action'

export interface UserState {
    user: User
}

const initialState: UserState = {
    user: null,
}

const _reducer = createReducer(
    initialState,
    on(fromAuthActions.Login, (state, payload) => {
        const user = new User(payload.email, payload.userId, payload.token, payload.expirationDate)
        return ({...state, user: user})
    }),
    on(fromAuthActions.Logout, (state) => ({...state, user: null})),
)

export function authReducer(state: UserState, action: Action) {
    return _reducer(state, action);
}