import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [

]

const modules = [
  CommonModule,
]


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
