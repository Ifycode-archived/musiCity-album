import { Routes } from '@angular/router';
import { AlbumListComponent } from './main/albums/album-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
]
