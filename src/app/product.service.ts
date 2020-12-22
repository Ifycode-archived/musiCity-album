import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlbumContainer } from './album-container';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbum(id: number): Observable<AlbumContainer> {
    return this._httpClient.get(this._albumUrl)
    .pipe(map((response) => <AlbumContainer>response));
  }
}
