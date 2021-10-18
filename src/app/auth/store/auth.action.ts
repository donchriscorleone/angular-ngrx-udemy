import { createAction, props } from "@ngrx/store";

export const Login = createAction(
    'LOGIN',
    props<{email: string,
        userId: string,
        token: string,
        expirationDate: Date}>()
)

export const Logout = createAction(
    'LOGOUT',
)