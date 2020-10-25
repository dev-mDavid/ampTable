import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
// Data-Sharing
  @Input() col: any; // Object
  @Output() widthEvent = new EventEmitter<object>();
  @Output() deleteEvent = new EventEmitter<object>();

// Template Variables
  widthPx: string;

// Life-Cyle Hooks
  ngOnInit() {
    this.widthNumToString(this.col.width)
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
