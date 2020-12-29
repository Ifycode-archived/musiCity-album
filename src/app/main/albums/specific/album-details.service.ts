import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsService {
  private _albumListUrl = '../assets/db/albumlist.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbumList(id: number) {
    return this._httpClient.get(this._albumListUrl)
    .pipe(map((response: any[]) => response.find(list => list.id === id)));
  }

}
