import { Component,OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-side-nav-archieve',
  templateUrl: './side-nav-archieve.component.html',
  styleUrls: ['./side-nav-archieve.component.scss']
})
export class SideNavArchieveComponent implements OnInit {
  notesArray:any =[] ;
  constructor(private noteService : NoteService){}

  ngOnInit(): void {
    this.archieveNote
    
  }

  archieveNote(){
    console.log("archieve note")

    this.noteService.archieveNoteListService().subscribe((res:any) => {
      console.log(res) ;
      this.notesArray =res.data.data ;
      console.log("getting archieve notes")
    })

  }


}
