import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../../services/directus.service';

@Component({
  selector: 'app-meme-library',
  templateUrl: './meme-library.component.html'
})
export class MemeLibraryComponent implements OnInit {
  memes: any[] = [];

  constructor(private directusService: DirectusService) {}

  ngOnInit() {
    this.directusService.getMemes().subscribe(response => {
      this.memes = response.data;
    });
  }
}