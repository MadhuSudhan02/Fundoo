import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() noteObject : any ;
  noteIdList:any ;
  isDeleted: any ;
  isArchived :any ;
  color : any ;
  constructor(private noteService : NoteService) {}

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
      
    })

  }
  colorPalete() {
    console.log("i am color") 
    let req = {
      color: ['#fff','#1ecbe1', '#e01f27','#f1f20d','#55aa8e','#6600ff' ,'#e600ff'],
      noteIdList: [this.noteObject.id],
    }
    this.noteService.colorService(req).subscribe((res:any)=>{
      console.log("calling color api ", res)
    })

  }

}
