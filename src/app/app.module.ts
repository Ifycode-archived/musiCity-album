import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AlbumAppComponent } from './album-app.component';
import { AlbumListComponent } from './main/albums/album-list.component';
import { AlbumListService } from './main/common/album-list.service';
import { AlbumThumbnailComponent } from './main/albums/album-thumbnail.component';
import { AlbumDetailsComponent } from './main/albums/album-details/album-details.component';
import { AlbumDetailsService } from './main/albums/specific/album-details.service';

import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPageComponent } from './product-page/product-page.component';

import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AlbumAppComponent,
    AlbumListComponent,
    AlbumThumbnailComponent,
    AlbumDetailsComponent,

    ProductDescriptionComponent,
    ProductPageComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlbumListService,
    AlbumDetailsService,

    ProductService
  ],
  bootstrap: [AlbumAppComponent]
})
export class AppModule { }
