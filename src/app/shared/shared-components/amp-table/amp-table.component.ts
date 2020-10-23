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

  posts: Observable<any>;
 
  constructor(public http: HttpClient) { }

    getPosts(){
      // let headers = new HttpHeaders().set('Authorization', 'pk_10679142_R6E47B4Z2RQA7AENVWSGS43T6J4NIF0D')
      

      this.posts = this.http.get(this.ROOT_URL + '/posts')
      // this.posts = this.http.get(this.ROOT_URL + '/db')
    }

styleSwitch = "green"
  

  cols = [
    {
      id: 1,
      name: "apple",       
      width: 200,
      color: "green",
    },
    {
      id: 2,
      name: "banana",
      width: 200,
      color: "green",
    },
    {
      id: 3,
      name: "orange",
      width: 200,
      color: "green",
    },
    {
      id: 4,
      name: "grape",
      width: 200,
      color: "red"
    },
    {
      id: 5,
      name: "kiwi",
      width: 200,
      color: "green"
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
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}
