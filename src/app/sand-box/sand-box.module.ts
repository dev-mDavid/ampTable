import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from "../shared/shared.module";
import { SandBoxRoutingModule } from './sand-box-routing.module';


import { ObservableToArrayComponent } from './observable-to-array/observable-to-array.component';
import { DynamicResizingComponent } from './dynamic-resizing/dynamic-resizing.component';


@NgModule({
  declarations: [ObservableToArrayComponent, DynamicResizingComponent],
  imports: [
    CommonModule,
    SharedModule,
    SandBoxRoutingModule,
  ]
})
export class SandBoxModule { }
