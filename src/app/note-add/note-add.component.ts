import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../shared/note.module';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> {
      if(params['id']) {
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    })
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    if(this.new) { 
      this.notesService.add(form.value);
      this.router.navigateByUrl('/');
    }
    else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    
  }
  cancel() {
    this.router.navigateByUrl('/');
  }

}
