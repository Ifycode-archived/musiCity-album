import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {

  private _albumListUrl = '../assets/db/albumlist.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbumList() {
    return this._httpClient.get(this._albumListUrl)
    .pipe(map((response) => response));
  }
}
