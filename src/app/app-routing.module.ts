import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header/header.component";
import {FooterComponent} from "./footer/footer/footer.component";
import {NoteAddComponent} from "./note-add/note-add.component";

const routes: Routes = [
  { path: 'header-component', component: HeaderComponent },
  { path: 'footer-component', component: FooterComponent },
  { path: 'note-add-component', component: NoteAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
