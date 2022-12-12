import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header/header.component";
import {FooterComponent} from "./footer/footer/footer.component";
import {NoteAddComponent} from "./note-add/note-add.component";
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent},
  { path: 'header-component', component: HeaderComponent },
  { path: 'footer-component', component: FooterComponent },
  { path: 'note-add-component', component: NoteAddComponent },
  { path: 'note-list-component', component: NoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
