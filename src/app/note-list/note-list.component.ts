import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.module';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
    console.log("LİST",this.notes);
    
  }

}
