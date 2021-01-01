import { Routes } from '@angular/router';
import { AlbumListComponent } from './main/albums/album-list.component';
import { AlbumDetailsComponent } from './main/albums/album-details/album-details.component';
import { Error404Component } from './main/errors/404.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', redirectTo: '/404'}
]
