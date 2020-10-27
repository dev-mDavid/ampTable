import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPageRoutingModule } from './pagination-page-routing.module';
import { PaginationPageComponent } from './pagination-page.component';


@NgModule({
  declarations: [PaginationPageComponent],
  imports: [
    CommonModule,
    PaginationPageRoutingModule
  ]
})
export class PaginationPageModule { }
