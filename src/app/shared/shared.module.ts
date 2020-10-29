import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CdkTableModule } from "@angular/cdk/table";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AmpTableComponent } from './shared-components/amp-table/amp-table.component';
import { AmpColComponent } from "./shared-components/amp-col/amp-col.component";
import { AmpTable2Component } from './shared-components/amp-table2/amp-table2.component';
import { AmpCol2Component } from './shared-components/amp-col2/amp-col2.component';

import { AngularResizedEventModule } from 'angular-resize-event';

import { DragResizerDirective } from './shared-directives/drag-resizer.directive';

const components = [
  AmpTableComponent,
  AmpColComponent,  
  AmpTable2Component, 
  AmpCol2Component,
]

const modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,

  MatInputModule,
  MatFormFieldModule,

  MatIconModule,
  MatMenuModule,
  CdkTableModule,
  DragDropModule,
  AngularResizedEventModule
]


@NgModule({
  declarations: [...components, DragResizerDirective],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
