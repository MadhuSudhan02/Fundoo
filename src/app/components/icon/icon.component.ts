import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNavBinComponent } from '../side-nav-bin/side-nav-bin.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() noteObject: any;
  // @Input() isDeleted : any ;
  @Output() messageEvent = new EventEmitter();

  dateAndTime :Array<any> =[
    {laterToday :'20:00' , Tomorrow : '8:00' , nextWeek : 'Mon,8:00'} ,
    
    
  ] ;

  isDeleted: boolean = false;
  noteIdList: any;
  isArchived: any;
  color: any;
  date: any;

  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7fffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkBlue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];

  todayDate:
    | { reminder: any[]; noteIdList: any[]; userId: string | null }
    | undefined;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isArchived=this.noteObject.isArchived;
    this.isDeleted=this.noteObject.isDeleted;
    // let comp = this.route.snapshot.component;
    // if (comp == SideNavBinComponent) this.isDeleted == true;
  }

  //child to parent using output decorator for all three
  trashNote() {
    console.log(this.noteObject.id);
    let req = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    };
    console.log('getting noteID', req.noteIdList);
    this.noteService.noteTrashService(req).subscribe((data: any) => {
      console.log('notes moved to bin', data);
      this.messageEvent.emit(data);
      this.snackBar.open('trashNote API ', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }

  restoreNote() {
    console.log(this.noteObject.id);
    let req = {
      noteIdList: [this.noteObject.id],
      isDeleted: false,
    };
    console.log('getting noteID', req.noteIdList);
    this.noteService.noteTrashService(req).subscribe((data: any) => {
      console.log('moving notes back bin to display', data);
      this.messageEvent.emit(data);
      this.snackBar.open('Restore API', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }
  archieve() {
    console.log(this.noteObject.id);
    let req = {
      noteIdList: [this.noteObject.id],
      isArchived: true,
    };
    console.log('getting noteId', req.noteIdList);
    this.noteService.archieveNoteService(req).subscribe((res: any) => {
      console.log('notes moved to acheive nav', res);
      this.messageEvent.emit(res);
      this.snackBar.open('Archive API', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }
  colorPalete(color: any) {
    console.log('i am color');
    let req = {
      color: color,
      noteIdList: [this.noteObject.id],
    };
    this.noteService.colorService(req).subscribe((res: any) => {
      console.log('calling color api ', res);
      this.messageEvent.emit(res);
      this.snackBar.open('color API', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }

  remainder() {
    console.log('i am color');
    this.todayDate = {
      reminder: [this.dateAndTime],
      noteIdList: [this.noteObject.id],
      userId: localStorage.getItem('userId'),
    };
    this.noteService.colorService(this.todayDate).subscribe((res: any) => {
      console.log('calling remainder api ', res);
      this.messageEvent.emit(res);
      this.snackBar.open('remainder API', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }

  unArchieve() {
    console.log(this.noteObject.id);
    let req = {
      noteIdList: [this.noteObject.id],
      isArchived: false,
    };
    console.log('getting noteId', req.noteIdList);
    this.noteService.archieveNoteService(req).subscribe((res: any) => {
      console.log('notes moving back to display note', res);
      this.messageEvent.emit(res);
      this.snackBar.open('Unarchieve API', 'called', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }

  openDialog(){

  }

  // this.todayDate = {
  //   reminder: [dateTime],
  //   noteIdList: [this.card.id],
  //   userId: localStorage.getItem('userId')

  // };
  //   this.route.snapshot.component;
  // if (comp == TrashNotesComponent) {
  //       this.isTrashComponent = true;
  //       // console.log(this.isTrashComponent);
  //     }
}
