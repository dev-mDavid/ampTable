import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amp-col',
  templateUrl: './amp-col.component.html',
  styleUrls: ['./amp-col.component.scss']
})
export class AmpColComponent implements OnInit {
@Input() timePeriod: string;


  constructor() { }

  ngOnInit(): void {
  }

}
