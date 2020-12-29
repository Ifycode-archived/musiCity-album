import { Routes } from '@angular/router';
import { AlbumListComponent } from './main/albums/album-list.component';
import { AlbumDetailsComponent } from './main/albums/album-details/album-details.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
]
