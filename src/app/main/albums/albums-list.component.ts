import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../service/albums.service';

@Component({
  selector: 'albums-list',
  template: `
    <div>
      <h2>MusiCity Albums</h2>
      <div>
        <album-thumbnail *ngFor="let album of albums" [album]="album"></album-thumbnail>
      <div>
    </div>
  `
})
export class AlbumsListComponent implements OnInit {
  albums: any;
  constructor(private _albumsService: AlbumsService) { }

  ngOnInit(): void {
    this._albumsService.getAlbums()
    .subscribe(response => this.albums = response);
  }

}
