import { Component,OnInit, Input ,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})

export class DisplayNoteComponent implements OnInit {
  @Input() childArray : any ;
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    
  }
  updateNote(noteObject : any) {
    console.log("calling the update")
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data: noteObject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  }

