import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'amp-table',
  templateUrl: './amp-table.component.html',
  styleUrls: ['./amp-table.component.scss']
})
export class AmpTableComponent  {

  readonly ROOT_URL = 'https://my-json-server.typicode.com/dev-mdavid/amptable';
  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  tasks: Observable<any>;
 
  constructor(public http: HttpClient) { }

    getTasks(){
      // let headers = new HttpHeaders().set('Authorization', 'pk_10679142_R6E47B4Z2RQA7AENVWSGS43T6J4NIF0D')
      

      this.tasks = this.http.get(this.ROOT_URL + '/tasks')
      // this.posts = this.http.get(this.ROOT_URL + '/db')
    }

styleSwitch = "green"
  

  cols = [
     {
      position: 0,
      id: 1,
      name: "Ids",       
      width: 200,
      color: "green",
    },
    {
      position: 1,
      id: 2,
      name: "Name",
      width: 200,
      color: "green",
    },
    {
      position: 2,
      id: 3,
      name: "Status",
      width: 200,
      color: "green",
    },
    {
      position: 3,
      id: 4,
      name: "Creator",
      width: 200,
      color: "red"
    },
    
  ]

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

receivesStyleSwitch($event){
  
  
  
}

  drop(event: CdkDragDrop<string[]>) {
    // event.currentIndex = this.cols.position
    moveItemInArray(this.cols, event.previousIndex, event.currentIndex);
    
    this.cols[event.currentIndex].position = event.currentIndex;
    console.log(this.cols)
    
  }

}
