import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/note.module';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note

  constructor() { }

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm): void {
    console.log(form)

  }

}
