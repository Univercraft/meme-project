import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeLibraryComponent } from './components/meme-library/meme-library.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MemeEditorComponent } from './components/meme-editor/meme-editor.component';

const routes: Routes = [
  { path: '', component: MemeLibraryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editor', component: MemeEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }