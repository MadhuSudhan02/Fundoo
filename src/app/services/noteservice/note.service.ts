import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getAllNotesService() {
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getNotesList',
      true,
      requestHeaderOption
    );
  }

  createNote(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/addNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  updateNotes(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/updateNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  noteTrashListService() {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getTrashNotesList',
      true,
      requestHeaderOption
    );
  }

  noteTrashService(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/trashNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  archieveNoteListService() {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getArchiveNotesList',
      true,
      requestHeaderOption
    );
  }
  archieveNoteService(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/archiveNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  colorService(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/changesColorNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  remainderService(data: any) {
    this.token = localStorage.getItem('token');
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/addUpdateReminderNotes',
      data,
      true,
      requestHeaderOption
    );
  }

  RemainderListService() {
    let requestHeaderOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getReminderNotesList',
      true,
      requestHeaderOption
    );
  }
}
