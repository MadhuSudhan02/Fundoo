import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title : any ;
  description : any ;
  Id :any ;
  
  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService : NoteService

  ) {
    console.log(data)
    if(data){
      this.title = this.data.title ;
      this.description = this.data.description ; 
      this.Id = this.data.id 
    }

  }

  onNoClick(): void {
    console.log("updated data" , this.title)
    //calling update note api here

    let data = {
      title :this.title ,
      description : this.description ,
      noteId : this.Id 
    }
    this.noteService.updateNotes(data).subscribe((data : any)=>{
      console.log(data);

  })

    this.dialogRef.close();
  }

}
