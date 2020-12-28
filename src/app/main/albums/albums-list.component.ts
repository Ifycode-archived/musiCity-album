import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'albums-list',
  template: `
    <div>
      <h2>MusiCity Albums</h2>
      <div>Add album thumbnail here<div>
    </div>
  `
})
export class AlbumsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
