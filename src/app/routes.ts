import { Routes } from '@angular/router';
import { AlbumsListComponent } from './main/albums/albums-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumsListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
]
