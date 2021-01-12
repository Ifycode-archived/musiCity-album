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
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './main/errors/404.component';
import { AlbumRouteActivator } from './main/albums/album-details/album-router-activator.service';

@NgModule({
  declarations: [
    AlbumAppComponent,
    AlbumListComponent,
    AlbumThumbnailComponent,
    AlbumDetailsComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlbumListService,
    AlbumDetailsService,
    AlbumRouteActivator
  ],
  bootstrap: [AlbumAppComponent]
})
export class AppModule { }
