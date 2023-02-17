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
  constructor(private noteService : NoteService) {}

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
    // achieveNoteService
    console.log("getting noteId",req.noteIdList) 
    this.noteService.archieveNoteService(req).subscribe((res:any)=>{
      console.log("notes moved to acheive nav",res) ;
      
    })
  }

}
