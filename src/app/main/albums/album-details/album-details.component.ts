import { Component, OnInit } from '@angular/core';
import { AlbumDetailsService } from '../specific/album-details.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumContainer } from '../specific/album-container';

@Component({
  template: `
    <h2>Album Details Page: {{list?.id}}</h2>
    <div>
      <div>{{list?.album?.name}}</div>
      <div *ngFor="let track of list?.album?.tracks">
        <img [src]="track.trackPhoto">
      </div>
    </div>
  `
})
export class AlbumDetailsComponent implements OnInit {
  list: AlbumContainer;

  constructor(private _albumDetailsService: AlbumDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this. _albumDetailsService.getAlbum(+this.route.snapshot.params['id'])
    .subscribe(response => this.list = response);
  }

}
