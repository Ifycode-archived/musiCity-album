import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'album-thumbnail',
  template: `
    <div>
      <img [src]="list?.thumbnailImage" alt="{{list?.albumName}} album cover image">
      <div>{{list?.albumName}}</div>
    </div>
  `
})
export class AlbumThumbnailComponent implements OnInit {
  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

}
