import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() noteObject : any ;
  constructor(private noteService : NoteService) {}

  trashNote(){
    console.log(this.noteObject.id) ;
    let data = {
      noteIdList : this.noteObject.id ,
      isDeleted : true 
    }
    // this.noteService.noteTrashService().subscribe((data:any)=>{
    //   console.log(data) ;
    // })
  }

}
