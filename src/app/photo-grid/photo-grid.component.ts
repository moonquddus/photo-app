import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lightbox } from 'ngx-lightbox';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
  providers: [ ApiService ]
})
export class PhotoGridComponent implements OnInit {

  albumId: number;
  title = 'Loading Photos...';
  album = [];
  loadMoreLink = '';
  loading = true;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private lightbox: Lightbox) {}

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.params['id'];
    // If there's an album id parameter, we're viewing the photos of an album
    if (this.albumId) {
      this.apiService.getAlbumPhotos(this.albumId).subscribe((data) => {
        this.handlePhotoData(data);
      });
      this.apiService.getAlbum(this.albumId).subscribe((data) => {
        this.title = 'Album: ' + data['title'];
      });
    } else {
      // else, we're showing a generic view of ALL photos
      this.apiService.getPhotos().subscribe((data) => {
        this.title = 'Latest Photos';
        this.handlePhotoData(data);
      });
    }
  }

  handlePhotoData(data: object) {
    this.loading = false;
    if (data.hasOwnProperty('body')) {
      this.parseAlbumData(data);
    }
    this.initLoadMoreLink(data);
  }

  parseAlbumData(data: object) {
    // We're reshaping the data to fit the lightbox plugin I'm using
    data['body'].forEach(photo => {
      this.album.push({
        id: photo['id'],
        albumId: photo['albumId'],
        src: photo['url'],
        caption: photo['title'],
        thumb: photo['thumbnailUrl']
      });
    });
  }

  initLoadMoreLink(data: object) {
    this.loadMoreLink = '';
    if (data.hasOwnProperty('headers')) {
      const linkData = data['headers'].get('link');
      const pageLinks = this.apiService.getPaginationLinks(linkData);
      // Do a bit more of a thorough checking before we search deep like this
      if (pageLinks && pageLinks.length > 0) {
        this.loadMoreLink = pageLinks.filter(link => link.rel === 'next')[0]['url'];
      }
    }
  }

  open(idx: number): void {
    this.lightbox.open(this.album, idx);
  }

  close(): void {
    this.lightbox.close();
  }

  loadMorePhotos() {
    if (this.loading) {
      return null;
    }
    this.loading = true;
    this.apiService.getFromUrl(this.loadMoreLink).subscribe((data) => {
      this.handlePhotoData(data);
    });
  }

}
