import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlbumDetailsService } from '../specific/album-details.service';
import { AlbumContainer } from '../specific/album-container';

@Injectable({
  providedIn: 'root'
})
export class AlbumRouteActivator implements CanActivate {
  list: AlbumContainer;

  constructor(private _albumDetailsService: AlbumDetailsService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const albumExists = !!this._albumDetailsService.getAlbum(+route.params['id']).subscribe(response => {
      this.list = response;
      if (this.list === undefined) {
        this.router.navigate(['/404']);
        //console.log("404 - Does not exist");
      }
    });

    return albumExists;


    /* This doesn't work:

    const albumExists = !!this._albumDetailsService.getAlbum(+route.params['id']);

    if (!albumExists) this.router.navigate(['/404']);
      return albumExists;

    */
  }
}
