import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { UsersEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(UsersEffects)
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
