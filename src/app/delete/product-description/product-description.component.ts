import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AlbumContainer } from '../album-container';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: AlbumContainer;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1)
    .subscribe(response => this.albumInfo = response);
  }

}
