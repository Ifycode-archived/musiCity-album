import { Component, OnInit } from '@angular/core';
import { AlbumListService } from '../service/album-list.service';

@Component({
  template: `
    <div>
      <h2>MusiCity Music Albums</h2>
      <div>
        <album-thumbnail *ngFor="let list of albumlist" [list]="list"></album-thumbnail>
      <div>
    </div>
  `
})
export class AlbumListComponent implements OnInit {
  albumlist: any;
  constructor(private _albumListService: AlbumListService) { }

  ngOnInit(): void {
    this._albumListService.getAlbumList()
    .subscribe(response => this.albumlist = response);
  }

}
