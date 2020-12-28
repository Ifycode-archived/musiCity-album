import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private _albumsUrl = '../assets/db/albums.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbums() {
    return this._httpClient.get(this._albumsUrl)
    .pipe(map((response) => response));
  }
}
