import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { Observable, Subject, interval, } from "rxjs";
import { takeUntil, tap, filter } from "rxjs/operators";

@Directive({
  selector: '[ampDragResizer]'
})
export class DragResizerDirective {

@Output() resizeDiff: EventEmitter<number> = new EventEmitter();

state: Subject<string> = new Subject();

cancel: Observable<string>;

  constructor() { 
  
    this.cancel = this.state.pipe(
    //   filter(v => v === 'cancel'),
      tap(v => {
        console.log('stop hold')
        this.resizeDiff.emit()
      })
    )    

  }

  @HostListener('mouseup',['$event']) 
  onDrop() {
    this.state.next('cancel')
    console.log('stop')
  }

  @HostListener('mousedown', ['$event'])
  onDrag(event: MouseEvent) {
    console.log('start hold')
    this.state.next('start')

    const n = 100;

    interval(n).pipe(
      takeUntil(this.cancel),
      tap(v => {
        // console.log(event.clientX)
        // this.resizeDiff.emit(v * n)
        this.resizeDiff.emit(event.clientX)
      })
    )
    .subscribe()

  }
      
   

}
