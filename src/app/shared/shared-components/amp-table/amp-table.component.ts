import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { Store } from "@ngrx/store";
import {  Observable, of, Subscription } from 'rxjs';
import * as fromCol from "../../../core/col.reducer";
import * as actions from "../../../core/col.action";

import { Col } from "../../../core/col.reducer";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'amp-table',
  templateUrl: './amp-table.component.html',
  styleUrls: ['./amp-table.component.scss']
})
export class AmpTableComponent  {

  

  tasks: Observable<any>;
  cols: Array<any>;
  colArray: Subscription;

  constructor(
    public http: HttpClient,
    private store: Store<fromCol.State>
    ) { }

// Life-Cycle Hooks
  ngOnInit(){
    this.colArray = this.store.select(fromCol.selectAll).subscribe(cols => {
      this.cols = cols
    })   
  }

  ngOnDestroy(){
    this.colArray.unsubscribe()   
  }

// Http Requests
  readonly ROOT_URL = 'https://my-json-server.typicode.com/dev-mdavid/amptable';
  
  getTasks(){    
    this.tasks = this.http.get(this.ROOT_URL + '/tasks')
  }

// NgRx Store CRUD Operations
  createCol() {    
    const col: fromCol.Col = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'Col Name',
      width: 200,
    }

    this.store.dispatch( new actions.Create(col))
  }

  updateColId(id, newId) {
    this.store.dispatch( new actions.Update(id, {id: newId}))
  }

  updateColName(id, name) {
    this.store.dispatch( new actions.Update(id, {name: name}))
  }
  
  updateColWidth(id, width) {
    this.store.dispatch( new actions.Update(id, {width: width}))
  }

  deleteCol(id) {
    this.store.dispatch( new actions.Delete(id))
  }

//  Drag & Drop [Column] Functionality 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cols, event.previousIndex, event.currentIndex);    

    // Updates Sorting Position of All Columns
    for(let i = 0; i < this.cols.length; i++){      
      this.updateColId(this.cols[i], i.toString()) 
    }

  }

// Data Sharing: Child-to-Parent [amp-col to amp-table]
  receivesWidth($event) {
    this.updateColWidth($event.id, $event.width)
  }
 
}