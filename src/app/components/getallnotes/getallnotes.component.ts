import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
NoteService

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  arrayNoteList = [] ;
  constructor(private noteService : NoteService) {}

  ngOnInit() {
    this.getallnotes() ;

  }
  
  
  getallnotes() {
    //we will call api here
    this.noteService.getAllNotesService().subscribe((result : any)=>{
      console.log(result.data.success);
      console.log(result.data.data) ;

      this.arrayNoteList = result.data.data ;
      this.arrayNoteList.reverse() ;
      this.arrayNoteList =this.arrayNoteList.filter((filterdata :any) =>{
        return filterdata.isDeleted=== false && filterdata.isArchived===false ;
      })


      console.log("this is notes arrays" , this.arrayNoteList)

    })
    }


    received(e : any) {
      console.log("note created sucessfully" ,e.status.details)
      this.getallnotes() ;
    }

}
