import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlbumDetailsService } from '../specific/album-details.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumRouteActivator implements CanActivate {
  constructor(private _albumDetailsService: AlbumDetailsService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const albumExists = !!this._albumDetailsService.getAlbum(+route.params['id']);

    if (!albumExists) this.router.navigate(['/404']);
      return albumExists;
  }
}
