import { Component,OnInit, Input ,Inject, Output ,EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/DataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { }

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})

export class DisplayNoteComponent implements OnInit {
  @Input() childArray : any ;
  // @Input() isDeleted : any ;
  @Output() messageDisplayToGetallnote = new EventEmitter<string>();

  searchValue : any ;
  msg: any;
  constructor(public dialog: MatDialog ,private dataService : DataService , private snackBar : MatSnackBar){}

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res :any) => {
      console.log(res)
      this.searchValue=res
    })
     
    
  }
  updateNote(noteObject : any) {
    console.log("calling the update")
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data: noteObject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.snackBar.open('UpdateNote API called','',{
        duration :3000 ,
        verticalPosition: 'top'
      })
    });
  }
  recieveMessageFromTrash($event : any){
    console.log("event from icon to display" , $event)
    this.msg = $event ;
    console.log("msg" , this.msg) ;

    this.messageDisplayToGetallnote.emit(this.msg) ;
    this.snackBar.open('TrushNote API called','',{
      duration :3000 ,
      verticalPosition: 'top'
    })

  }
}
  

