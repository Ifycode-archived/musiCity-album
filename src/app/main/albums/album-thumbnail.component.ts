import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'album-thumbnail',
  template: `
    <div>
      <img [src]="album?.coverImage" alt="{{album?.albumName}} album cover image">
      <div>{{album?.albumName}}</div>
    </div>
  `
})
export class AlbumThumbnailComponent implements OnInit {
  @Input() album: any;

  constructor() { }

  ngOnInit(): void {
  }

}
