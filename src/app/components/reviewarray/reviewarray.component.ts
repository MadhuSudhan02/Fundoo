import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewarray',
  templateUrl: './reviewarray.component.html',
  styleUrls: ['./reviewarray.component.scss']
})
export class ReviewarrayComponent {

  

  arr : any = ["mohan", "kumar", "ram" ,"lakshman" ,"manjunath" ,"manju" ,"manoj" , "rahul" ,"roman", "lucky"] ;
  result :any ;
  found : any;
  val :any ;


 
value() {
  this.found=this.arr.filter((value:any)=> value===this.result)
  if (this.found == this.result){
    this.val=["is in the emp list"]
    
  }
  else {
    this.val=["no data found"]
  }
  
  }
}



 

