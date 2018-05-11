import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <div>
      <!-- {{message}} -->
      <p>
        <input 
          #enterValue
          type="text"
          [(ngModel)]="message"
          [ngClass]="{mousedown:isMouseDown}"
          (mousedown)="isMouseDown = true"
          (mouseup)="isMouseDown = false"
          (mouseleave)="isMouseDown = fasle"
         />
        <!-- <button (mouseover)="onClick(enterValue.value,$event)">
          Click me
          </button> -->
        <button class="white bg-black code" (click)="update.emit({text:message})">Click me</button>
       </p>
     </div>
  `,
  styles:[
  `
    :host{
      display: flex;
      flex-direction: column;
    }
    *{
      font-family: monospace
    }
    .mousedown{
      border: 2px solid green;
    }
  `
  ]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() message;

  @Output() update = new EventEmitter()

  onClick(value,e){
    console.log(value,e)
  }

  constructor() {
    // setInterval(()=>this.message = Math.random().toString(), 1000)
  }

  ngOnInit() {
  }

}
