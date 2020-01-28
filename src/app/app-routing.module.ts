import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'albums', component: AlbumListComponent},
  { path: 'album/:id/photos', component: PhotoGridComponent},
  { path: 'album/:id', redirectTo: 'album/:id/photos', pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // maybe in the future, instead of redirecting to home all the time I can make a nice "Not Found" comp instead
  { path: '*', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
