import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DemoPageComponent } from './demo-page.component';


@NgModule({
  declarations: [DemoPageComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule
  ]
})
export class DemoPageModule { }
