import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumsWidgetComponent } from './albums-widget/albums-widget.component';

import { LightboxModule } from 'ngx-lightbox';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 5,
  navigation: true,
  spaceBetween: 15
};
@NgModule({
  declarations: [
    AppComponent,
    PhotoGridComponent,
    DashboardComponent,
    AlbumListComponent,
    AlbumsWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,
    SwiperModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
