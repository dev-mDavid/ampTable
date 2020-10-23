import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
// @Input() timePeriod: string;
@Input() col: any; // Object
@Input() styleSwitch: string;

@Output() styleSwitchEvent = new EventEmitter<any>();



// @HostListener('window:mousemove', ['$event'])
sendStyleSwitch(){
  this.styleSwitchEvent.emit({id: this.col.id,  color: "blue"})
}

  constructor() { }

  ngOnInit(): void {
  }

}
