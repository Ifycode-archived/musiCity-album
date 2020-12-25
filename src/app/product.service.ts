import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlbumContainer } from './album-container';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/db/album.json';
  private _productsUrl = '../assets/db/products.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbum(id: number): Observable<AlbumContainer> {
    return this._httpClient.get(this._albumUrl)
    .pipe(map((response) => <AlbumContainer>response));
  }

  getProducts(): Observable<Product> {
    return this._httpClient.get(this._productsUrl)
    .pipe(map((response) => <Product>response));
  }
}
