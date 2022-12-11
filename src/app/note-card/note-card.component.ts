import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input('title') title :  string;
  @Input('body') body :  string;

  constructor() { }

  ngOnInit(): void {

    console.log("title", this.title);
    console.log("BOD", this.body);
    
  }

}
