import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
// import {  } from "@angular/material/";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { AmpTableComponent } from './shared-components/amp-table/amp-table.component';
import { AmpColComponent } from "./shared-components/amp-col/amp-col.component";
import { AmpTable2Component } from './shared-components/amp-table2/amp-table2.component';
import { AmpCol2Component } from './shared-components/amp-col2/amp-col2.component';

const components = [
  AmpTableComponent,
  AmpColComponent,  
]

const modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,

  MatInputModule,
  MatFormFieldModule,

  MatIconModule,
  MatMenuModule,
  DragDropModule
]


@NgModule({
  declarations: [...components, AmpTable2Component, AmpCol2Component],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
