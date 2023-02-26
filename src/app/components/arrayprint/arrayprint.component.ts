import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayprint',
  templateUrl: './arrayprint.component.html',
  styleUrls: ['./arrayprint.component.scss']
})
export class ArrayprintComponent implements OnInit {

  concept :Array<any> =[
    {title :'roman' , description : 'excellent'} ,
    {title :'john' , description : 'lucky'} ,
    {title :'madan' , description : 'better'} ,
    {title :'rocky' , description : 'good'} ,
    {title :'golden' , description : 'lucky'} ,
    
  ] ;
  constructor(){}

  ngOnInit(): void {
    
  }
}
