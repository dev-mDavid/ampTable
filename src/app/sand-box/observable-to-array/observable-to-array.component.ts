/* 
  Problem:  in amp-table, I need drag & drop the columns WHILE also remembering the state of each column (order/position and width). 
  The main issue is a data-type problem. The store emits in observables, the drag & drop method needs to pass in an array.

  Solution/Approach: for this sandbox component, turn observables from the store into an array

  Solved! (what I was missing): I needed to subscribe in the TS and not in the HTML. By doing this, I was able to unwrap the observables in the TS, allowing me to transform it into an array.
*/

import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { toArray } from "rxjs/operators";
import * as fromCol from "../../core/col.reducer"
import * as actions from "../../core/col.action"

import { Col } from "../../core/col.reducer";

@Component({
  selector: 'app-observable-to-array',
  template: `
    <h1>
      Observable to Array
    </h1>

    <div *ngFor="let col of cols">
      {{ col.name }}
    </div>
  `,
  styles: [
  ]
})
export class ObservableToArrayComponent{

  cols: Array<any>;
  subscription: Subscription;

  constructor(
    private store: Store<fromCol.State>
    ) { }

  ngOnInit() {

    this.subscription = this.store.select(fromCol.selectAll).subscribe(cols => {
      this.cols = cols
    })        

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
