import { Component, OnInit,  Input, Output, EventEmitter, HostListener, DoCheck } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Observable, fromEvent } from 'rxjs';
import { observeOn  } from 'rxjs/operators';


@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
// Data-Sharing
  @Input() col: any; // Object
  @Input() tasks: any; // Object
  @Output() widthEvent = new EventEmitter<object>();
  @Output() deleteEvent = new EventEmitter<object>();


// DOM Events
  search: boolean = false;
  
  // @HostListener('mousedown', ['$event'])
  // mouseDownListener(event){
  //   console.log('mousedown')
  //   console.log(event.clientX)
  //   this.mouse.prevX = event.clientX
  // }
    
  // @HostListener('mouseup', ['$event'])
  // mouseUpListener(event){
  //   console.log('mouseup')
  //   console.log(event.clientX)
  //   this.mouse.currX = event.clientX
    

    // this.widthDiff(this.mouse.prevX, this.mouse.currX)
    
  // }
  mouse = {
    prevX: null,
    currX: null,
  }
  
  widthDiff(leftX, rightX){
    // let diff = (rightX - leftX)
    // let addedWidths = (this.col.width + diff)    
    // this.changeWidth({id: this.col.id, width: addedWidths})   
  }
  
@HostListener('onresize', ['$event'])
onResizeListener(){
  console.log('hello')
}

saveWidth(event){
  const newWidth = event.target.parentElement.parentElement.clientWidth
   this.changeWidth({id: this.col.id, width: newWidth})   
}



// Template Variables
  widthPx: string;
  matchingKey: string;    

  
// Life-Cyle Hooks
  ngOnInit() {
    this.widthNumToString(this.col.width);
  }
  
  widthNumToString(width: number){
    const px = 'px';
    return this.widthPx = width + px;
  }

// Data Sharing: Child-to-Parent [amp-col to amp-table]
  changeWidth(val: object) {
    this.widthEvent.emit(val)
  }

  deleteCol(val: object){
    this.deleteEvent.emit(val)
  }

  
}