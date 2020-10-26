import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-resizing-page',
  template: `
    <h1>
      Resizing Page Works!
    </h1>
    <div class="box-container">
      <span>600px</span>
      <span>400px</span>
      <sb-dynamic-resizing
        [width]="300"
        [height]="150"
        [left]="100"
        [top]="100">
    </sb-dynamic-resizing>
    </div>
  `,
  styleUrls: ['./resizing-page.component.scss']
})

export class ResizingPageComponent {
 title = 'angular-resizable-draggable';

}
