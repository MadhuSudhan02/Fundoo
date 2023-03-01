import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-side-nav-archieve',
  templateUrl: './side-nav-archieve.component.html',
  styleUrls: ['./side-nav-archieve.component.scss']
})
export class SideNavArchieveComponent implements OnInit {
  // @Output() messageEvent = new EventEmitter();
  notesArray:any =[] ;
  constructor(private noteService : NoteService ){}

  ngOnInit(): void {
    this.archieveNote()
    
  }

  archieveNote(){
    console.log("archieve note")

    this.noteService.archieveNoteListService().subscribe((res:any) => {
      console.log(res) ;
      this.notesArray =res.data.data ;
      this.notesArray =this.notesArray.filter((filterdata :any) =>{
        return filterdata.isDeleted=== false && filterdata.isArchived===true ;
      })
      // this.messageEvent.emit();
      console.log("getting archieve notes")
    })

  }

  recieveMessageFromTrash($event : any) {
    this.archieveNote() 

  }


}
