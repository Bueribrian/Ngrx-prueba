import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/models/app.interface";

// Agarro la entidad Users en la Store
export const selectFeature = (state: AppStateInterface) => state.users;

// Creo selectores para valores de mi entidad sacada del store
export const isLoadingSelector = createSelector(selectFeature, (state) => state.loading);
export const usersSelector = createSelector(selectFeature, (state) => state.users);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
