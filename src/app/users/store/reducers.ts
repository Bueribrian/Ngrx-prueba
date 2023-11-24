import { createReducer, on } from "@ngrx/store";
import UserState from "../models/store.model";
import * as UsersActions from './actions'

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const reducers = createReducer(
    initialState,
    on(UsersActions.getUsers, (state) => ({ ...state, loading: true })),
    on(UsersActions.getUsersSuccess, (state, action) => ({ ...state, loading: false, users: action.users })),
    on(UsersActions.getUsersFailed, (state, action) => ({ ...state, loading: false, error: action.error })),
)