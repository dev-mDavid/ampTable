import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AmpTableComponent } from './shared-components/amp-table/amp-table.component';
const components = [
  AmpTableComponent
]

const modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
