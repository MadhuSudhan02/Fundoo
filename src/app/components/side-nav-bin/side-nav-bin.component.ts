import { Component ,Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-side-nav-bin',
  templateUrl: './side-nav-bin.component.html',
  styleUrls: ['./side-nav-bin.component.scss']
})
export class SideNavBinComponent implements OnInit {
  // @Input() noteObject : any ;
  constructor(private noteService : NoteService) {}

  ngOnInit(): void {
    this.trashNote();
  }

  trashNote(){
    console.log("trash note ")
    // console.log(this.noteObject.id) ;
    // let data = {
    //   noteIdList : this.noteObject.id ,
    //   isDeleted : true 
    // }
    this.noteService.noteTrashService().subscribe((data:any)=>{
      console.log(data) ;
    })
  }

}

