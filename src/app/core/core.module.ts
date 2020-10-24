import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { colReducer } from "./col.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('col', colReducer),
  ]
})
export class CoreModule { }
