import { createAction, props } from "@ngrx/store";
import User from "../models/user.model";

export const getUsers = createAction('[Users] Get Users');
export const getUsersSuccess = createAction('[Users] Get Users success', props<{ users: User[] }>());
export const getUsersFailed = createAction('[Users] Get Users failed', props<{ error: string }>());
