import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() noteObject : any ;
  @Output() messageEvent = new EventEmitter();


  noteIdList:any ;
  isDeleted: any ;
  isArchived :any ;
  color : any ;
  // comp = this.route.snapshot.component; 

  colors :Array<any> =[
    {code :'#fff' , name : 'white'} ,
    {code :'#f28b82' , name : 'red'} ,
    {code :'#fbbc04' , name : 'orange'} ,
    {code :'#FFFF00' , name : 'yellow'} ,
    {code :'#ccff90' , name : 'green'} ,
  ] ;

  todayDate: { reminder: any[]; noteIdList: any[]; userId: string | null; } | undefined;
  constructor(private noteService : NoteService ) {}


  
  //child to parent using output decorator for all three
  trashNote(){
    console.log(this.noteObject.id) ;
    let req = {
      noteIdList : [this.noteObject.id] ,
      isDeleted : true
    }
    console.log("getting noteID",req.noteIdList)
    this.noteService.noteTrashService(req).subscribe((data:any)=>{
      console.log("notes moved to bin" ,data)
      this.messageEvent.emit(data) ;
    })
  }

  restoreNote(){
    console.log(this.noteObject.id) ;
    let req = {
      noteIdList : [this.noteObject.id] ,
      isDeleted : false 
    }
    console.log("getting noteID",req.noteIdList)
    this.noteService.noteTrashService(req).subscribe((data:any)=>{
      console.log("moving notes back bin to display" ,data)
      this.messageEvent.emit(data) ;
    })
  }
  archieve() {
    console.log(this.noteObject.id) ;
    let req = {
      noteIdList : [this.noteObject.id ],
      isArchived : true
    }
    console.log("getting noteId",req.noteIdList) 
    this.noteService.archieveNoteService(req).subscribe((res:any)=>{
      console.log("notes moved to acheive nav",res) ;
      this.messageEvent.emit(res) ;
      
    })

  }
  colorPalete(color :any) {
    console.log("i am color") 
    let req = {
      color :color ,
      noteIdList: [this.noteObject.id],
    }
    this.noteService.colorService(req).subscribe((res:any)=>{
      console.log("calling color api ", res)
      this.messageEvent.emit(res) ;
    })

  }

  remainder() {
    console.log("i am color") 
    this.todayDate = {
      reminder: [],
      noteIdList: [this.noteObject.id],
      userId: localStorage.getItem('userId')
  
    };
    this.noteService.colorService(this.todayDate).subscribe((res:any)=>{
      console.log("calling remainder api ", res)
    })

  }

  unArchieve() {
    console.log(this.noteObject.id) ;
    let req = {
      noteIdList : [this.noteObject.id ],
      isArchived : false 
    }
    console.log("getting noteId",req.noteIdList) 
    this.noteService.archieveNoteService(req).subscribe((res:any)=>{
      console.log("notes moving back to display note",res) ;
      this.messageEvent.emit(res) ;
      
    })

  }


  // this.todayDate = {
  //   reminder: [dateTime],
  //   noteIdList: [this.card.id],
  //   userId: localStorage.getItem('userId')

  // };
//   this.route.snapshot.component;
// if (comp == TrashNotesComponent) {
//       this.isTrashComponent = true;
//       // console.log(this.isTrashComponent);
//     }

}
