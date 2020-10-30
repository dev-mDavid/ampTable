import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
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

// Template Variables
  widthPx: string;
  
// Life-Cycle Hooks
  ngOnInit() {
    this.widthNumToString(this.col.width);
  }
  
// Update NgRx Store with current width
  saveWidth(event){  
    const newWidth = event.target.parentElement.parentElement.clientWidth

    this.changeWidth({id: this.col.id, width: newWidth})   

    console.log("✅ Width-State saved for " + this.col.name + " Column")
  }

// NgRx Action needs the second argument needs to be in type: string
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