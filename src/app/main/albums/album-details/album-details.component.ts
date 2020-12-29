import { Component, OnInit } from '@angular/core';
import { AlbumDetailsService } from '../specific/album-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h2>Album Details Page: {{list?.id}}</h2>`
})
export class AlbumDetailsComponent implements OnInit {
  list: any;
  constructor(private _albumDetailsService: AlbumDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this. _albumDetailsService.getAlbumList(+this.route.snapshot.params['id'])
    .subscribe(response => this.list = response);
  }

}
