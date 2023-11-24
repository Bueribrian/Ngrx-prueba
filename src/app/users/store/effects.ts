import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../services/users.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as UsersActions from './actions';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private usersService: UsersService) { }

    public getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.getUsers),
            mergeMap(() => this.usersService.getUsers().pipe(
                map((users) => UsersActions.getUsersSuccess({ users })),
                catchError((error) => of(UsersActions.getUsersFailed({ error: error.message }))))
            )
        )
    )
}