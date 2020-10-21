import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { DemoPageRoutingModule } from './demo-page-routing.module';

import { DemoPageComponent } from './demo-page.component';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DemoPageRoutingModule
  ]
})
export class DemoPageModule { }
