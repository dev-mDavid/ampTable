import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'amp-table',
  templateUrl: './amp-table.component.html',
  styleUrls: ['./amp-table.component.scss']
})
export class AmpTableComponent  {

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
