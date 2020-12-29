import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AlbumContainer } from '../album-container';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: AlbumContainer;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1)
    .subscribe(response => this.albumInfo = response);
  }

}
