import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
@Input() col: any; // Object

@Input() width: number;
@Output() widthEvent = new EventEmitter<object>();

px: string = 'px';
widthPx: string;


  constructor() { }

  ngOnInit(): void {
    this.widthPx = this.width + this.px;    
    // console.log(this.width + " — amp-col onInit width")
  }

  calcWidthPx(width){
    return width + 'px'
  }

  changeWidth(val) {
    this.widthEvent.emit(val)
    // this.widthEvent.emit(this.width)
  }

}
