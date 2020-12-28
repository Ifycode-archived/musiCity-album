import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'album-thumbnail',
  template: `
    <div>{{album?.albumName}}</div>
  `
})
export class AlbumThumbnailComponent implements OnInit {
  @Input() album: any;

  constructor() { }

  ngOnInit(): void {
  }

}
