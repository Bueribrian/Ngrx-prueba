import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  errorSelector,
  isLoadingSelector,
  usersSelector
} from '../../store/selectors'
import * as UsersActions from '../../store/actions'
import { Observable } from 'rxjs';
import User from '../../models/user.model';
import { AppStateInterface } from 'src/app/models/app.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  public loading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public users$: Observable<User[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.loading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.users$ = this.store.pipe(select(usersSelector));
  }

  ngOnInit() {
    this.store.dispatch(UsersActions.getUsers())
  }
}
