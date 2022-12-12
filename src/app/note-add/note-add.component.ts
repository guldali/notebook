import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.module';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note;

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    this.notesService.add(form.value);
    this.router.navigateByUrl('/');
  }

}
