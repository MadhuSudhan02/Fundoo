import { Component, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


 @Input() public parent : any ;
 @Output() message = new EventEmitter() ;

 send() {
  this.message.emit("Sudhan") ;
  // console.log("sudhan")
 }

}
