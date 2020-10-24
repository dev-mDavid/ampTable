import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'demo', loadChildren: () => import('./demo-page/demo-page.module').then(m => m.DemoPageModule) },
  { path: 'sandbox', loadChildren: () => import('./sand-box/sand-box.module').then(m => m.SandBoxModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
