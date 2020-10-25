import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { Store } from "@ngrx/store";
import {  Observable, of, map, Subscription } from 'rxjs';
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

  readonly ROOT_URL = 'https://my-json-server.typicode.com/dev-mdavid/amptable';
  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  tasks: Observable<any>;

  
  cols: Array<any>;
  colArray: Subscription;

  constructor(
    public http: HttpClient,
    private store: Store<fromCol.State>
    ) { }

  ngOnInit(){

    this.colArray = this.store.select(fromCol.selectAll).subscribe(cols => {
      this.cols = cols
    })   

    console.log(this.cols)


  }
  
  createCol() {
    const col: fromCol.Col = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'Col Name',
      width: 200,
    }

    this.store.dispatch( new actions.Create(col))
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

  getTasks(){
    // let headers = new HttpHeaders().set('Authorization', 'pk_10679142_R6E47B4Z2RQA7AENVWSGS43T6J4NIF0D')
    

    this.tasks = this.http.get(this.ROOT_URL + '/tasks')
    // this.posts = this.http.get(this.ROOT_URL + '/db')
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cols, event.previousIndex, event.currentIndex);
    
    console.log(this.cols)
    
  }


  getObjectKeys(obj){
    for (let k of Object.keys(obj)){
      console.log(k)
    }
  }

  getObjectValuesInArray(obj){
    let array = []
    for (let k of Object.values(obj)){
      array.push(k)
    }
    console.log(array)
    return array
  }

  receivesWidth($event) {
    this.width = $event
    // this.getObjectValuesInArray($event) 

    this.updateColWidth($event.id, $event.width)
    
    // console.log($event + "— Received")
  }

  showStore(){
    console.log(this.store)
  }

  ngOnDestroy(){
    this.colArray.unsubscribe()   
  }
}