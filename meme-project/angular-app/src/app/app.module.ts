import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MemeLibraryComponent } from './components/meme-library/meme-library.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MemeEditorComponent } from './components/meme-editor/meme-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeLibraryComponent,
    ProfileComponent,
    MemeEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }