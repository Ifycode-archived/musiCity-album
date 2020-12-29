import { Component, OnInit } from '@angular/core';
import { AlbumDetailsService } from '../specific/album-details.service';

@Component({
  template: `<h2>Album Details Page: {{list?.id}}</h2>`
})
export class AlbumDetailsComponent implements OnInit {
  list: any;
  constructor(private _albumDetailsService: AlbumDetailsService) { }

  ngOnInit() {
    this. _albumDetailsService.getAlbumList(1)
    .subscribe(response => this.list = response);
  }

}








 /* ngOnInit() {
    this.list = this. _albumDetailsService.getAlbumList(1);
  }*/

  /*
  ngOnInit() {
    this.albumlist = this. _albumDetailsService.getAlbumList()
    .subscribe(response =>  response.find(list => console.log(list.id)));
  }
*/

  /*
  ngOnInit() {
    this. _albumDetailsService.getAlbumList(1)
    .subscribe(response => this.albumlist = response.find(list => console.log(list.id)));
  }*/
