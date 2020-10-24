import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableToArrayComponent } from "./observable-to-array/observable-to-array.component";

const routes: Routes = [
  {path: '', component: ObservableToArrayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandBoxRoutingModule { }
