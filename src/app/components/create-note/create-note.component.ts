import { Component , OnInit,EventEmitter ,Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  title :any ;
  description :any ;
  show :boolean =false ;
  @Output() autoRefresh = new EventEmitter<any>() ;
  constructor (private noteService : NoteService , private snackBar : MatSnackBar) {}

  ngOnInit() {

  }
  showHide() {
    this.show=true ;
  }

  addNote(){
    this.show=false ;

    console.log(this.title ,this.description) ;

    let req = {
      title :this.title ,
      description : this.description
    }
    this.noteService.createNote(req).subscribe((req : any)=>{
      console.log(req);
      this.autoRefresh.emit(req) ;
      this.snackBar.open('Create Note API called','',{
        duration :3000 ,
        verticalPosition: 'top'
      })


  })
  

}
}
