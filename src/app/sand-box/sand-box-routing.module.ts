import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableToArrayComponent } from "./observable-to-array/observable-to-array.component";
import { ResizingPageComponent } from "./resizing-page/resizing-page.component";

const routes: Routes = [
  // {path: '', component: ObservableToArrayComponent}
  {path: '', component: ResizingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandBoxRoutingModule { }
