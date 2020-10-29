import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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

    this.getTasks();

    this.showGetRequest(false);
  }

ngOnDestroy(){
    this.colArray.unsubscribe()   
  }
  searchFilter(){
    // console.log(window.find)

  }

// Http Requests
  readonly ROOT_URL = 'https://my-json-server.typicode.com/dev-mdavid/amptable';
  
  getTasks(){    
    this.tasks = this.http.get(this.ROOT_URL + '/tasks')
  }
  getRequestVisible: boolean = false;
  showGetRequest(bool){
    return this.getRequestVisible = bool;
  }

// NgRx Store CRUD Operations
  createCol(colName: string = 'Col Name') {    
    const col: fromCol.Col = {
      id: new Date().getUTCMilliseconds().toString(),
      name: colName,
      sc_name: this.snakeCase(colName),
      width: 150,
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
    
    const
      arrayActedOn = this.cols,
      prevIdx = event.previousIndex,
      currIdx = event.currentIndex,
      prevCtr = event.previousContainer,
      ctrData = event.container.data,
      item = event.item;

    console.log({
      ctrData,
      arrayActedOn,
      prevIdx,
      currIdx,
      prevCtr,
      item,
    })
    
    // Updates Sorting Position of All Columns
    // for(let i = 0; i < this.cols.length; i++){      
    //   this.updateColId(this.cols[i], i.toString()) 
    // }

  }

  snakeCase(words: string){
      return words.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_'); 
   }
 
  
// Data Sharing: Child-to-Parent [amp-col to amp-table]
  receivesWidth($event) {
    this.updateColWidth($event.id, $event.width)
  }

  receivesDelete($event) {
    this.deleteCol($event.id)
  }
 
}