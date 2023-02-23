import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-side-nav-remainder',
  templateUrl: './side-nav-remainder.component.html',
  styleUrls: ['./side-nav-remainder.component.scss']
})
export class SideNavRemainderComponent implements OnInit  {
  notesArray: any;

  constructor (private noteService : NoteService){}
  ngOnInit(): void {
    this.remainderNoteList()
    
  }

  remainderNoteList(){
    console.log("remainder note ")

    this.noteService.RemainderListService().subscribe((result:any)=>{
      console.log(result) ;
      this.notesArray =result.data.data ;
      this.notesArray =this.notesArray.filter((filterdata :any) =>{
        
        // return filterdata.isDeleted=== true && filterdata.isArchived===false ;
      })
      console.log("getting remainder" ,this.notesArray)
    })
  }

}
