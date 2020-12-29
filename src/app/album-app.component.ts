import { Component } from '@angular/core';

@Component({
  selector: 'album-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AlbumAppComponent {

}
