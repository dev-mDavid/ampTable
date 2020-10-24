import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
@Input() col: any; // Object

  constructor() { }

  ngOnInit(): void {
  }

}
