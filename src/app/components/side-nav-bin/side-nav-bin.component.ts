import { Component ,Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-side-nav-bin',
  templateUrl: './side-nav-bin.component.html',
  styleUrls: ['./side-nav-bin.component.scss']
})
export class SideNavBinComponent implements OnInit {
  // @Input() noteObject : any ;
  notesArray:any =[] ;
  isDeleted : boolean =true ;
  constructor(private noteService : NoteService) {}

  ngOnInit(): void {
    this.trashNoteList();
  }

  trashNoteList(){
    console.log("trash note ")

    this.noteService.noteTrashListService().subscribe((result:any)=>{
      console.log(result) ;
      this.notesArray =result.data.data ;
      this.notesArray =this.notesArray.filter((filterdata :any) =>{
        return filterdata.isDeleted=== true && filterdata.isArchived===false ;
      })
      console.log("getting trash note" ,this.notesArray)
    })
  }

  
}

