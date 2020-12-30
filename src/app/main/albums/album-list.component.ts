import { Component, OnInit } from '@angular/core';
import { AlbumListService } from '../common/album-list.service';
import { List } from '../common/list';

@Component({
  template: `
    <div>
      <h2>MusiCity Music Albums</h2>
      <div *ngFor="let list of albumlist">
        <album-thumbnail [list]="list"></album-thumbnail>
      <div>
    </div>
  `
})
export class AlbumListComponent implements OnInit {
  albumlist: List;
  constructor(private _albumListService: AlbumListService) { }

  ngOnInit(): void {
    this._albumListService.getAlbumList()
    .subscribe(response => this.albumlist = response);
  }

}
