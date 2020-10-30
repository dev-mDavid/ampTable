import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { FormControl } from "@angular/forms";

import {map, startWith} from 'rxjs/operators';


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
  myControl = new FormControl();
  options: string[] = [
    '3000', 
    '0007', 
    '1138',
    '0027',
    'A113',
    'Deliver Peter\'s Suit (MK IV).',
    'Research horcrux at the library',
    'Teach young padawan Force Push',
    'Decode riddle on the playing card',
    'Grand Opening this Weekend!',
    'Open',
    'Completed',
    'Tony Stark',
    'Hermione Granger',
    'Obi-Wan Kenobi',
    'Alfred Pennyworth',
    'Remy',
    'Happy Hogan',
    'Harry Potter, Ron Weasley',
    'Luke Skywalker, R2-D2, C-3PO',
    'Bruce Wayne, Lucius Fox, Carrie Kelly',
    'Afredo Linguini, Colette Tatou, Anton Ego',
    '2020-10-27',
    '1997-02-23',
    '1977-05-25',
    '1939-02-15',
    '2007-07-02',
    '2020-10-27',
    '1997-02-23',
    '1977-05-25',
    '1939-02-15',
    '2007-07-02',    
  ];
  filteredOptions: Observable<string[]>;

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
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  // Autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

ngOnDestroy(){
    this.colArray.unsubscribe()   
  }
  
//  Highlights Search Text 
  pTags = document.getElementsByTagName("p");
  // searchText = "Open";
  searchFilter(searchText){    
    // console.log(searchText.value)
    for (let i = 0; i < this.pTags.length; i++) {
      this.pTags[i].setAttribute("style", "background-color: white, color: black");  
      if (this.pTags[i].textContent == searchText.value) {
        this.pTags[i].setAttribute("style", "background-color: #ff4081; color: white");
        

      }
    }

  }

  // Col Names
  colNamesArray = [
    'Id',
    'Name',
    'Status',
    'Creator',
    'Date Created',
    'Date Updated',
    'Date Closed',
    'Assignees',
    'Checklists',
    'Tags',
    'Priority',
    'Due Date',
    'Start Date',
    'Time Estimate',
    'Time Spent',
    'List',    
  ]

  // Used to create dynamic columns
  snakeCase(words: string){
      return words.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_'); 
   }
 

// Http Requests
  readonly ROOT_URL = 'https://my-json-server.typicode.com/dev-mdavid/amptable';
  
  getTasks(){    
    this.tasks = this.http.get(this.ROOT_URL + '/tasks')
    console.log("💌 Http GET Request Sent")
  }
  getRequestVisible: boolean = false;
  showGetRequest(bool){
    if (bool) {
      this.getTasks()
    }
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
    

  // Console logs the Drag & Drop events
    const
      arrayActedOn = this.cols,
      prevIdx = event.previousIndex,
      currIdx = event.currentIndex,
      prevCtr = event.previousContainer,
      ctrData = event.container.data,
      item = event.item;

    console.log({
      arrayActedOn,
      ctrData,
      prevIdx,
      currIdx,
      prevCtr,
      item,
    })
    
  // Updates Sorting Position of All Columns    
    // for(let i = 0; i < this.cols.length; i++){      
    //   this.updateColId(this.cols[i], i.toString()) 
    //   console.log(this.cols[i])
    //   console.log(i.toString())
    // }

  // Console logs the Column movement
    if(prevIdx > currIdx) {
      console.log('Column Moved Down ' + 'from position–' + prevIdx + ' to position–' + currIdx)
    } else {
      console.log('Column Moved Up ' + 'from position–' + prevIdx + ' to position–' + currIdx)
    }
    console.log('🔶 Order-State not saved')
    
  }
  

  
// Data Sharing: Child-to-Parent [amp-col to amp-table]
  receivesWidth($event) {
    this.updateColWidth($event.id, $event.width)
  }

  receivesDelete($event) {
    this.deleteCol($event.id)
  }
 
}