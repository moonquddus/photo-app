import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  providers: [ ApiService ]
})
export class AlbumListComponent implements OnInit {
  albums = [];
  loadMoreLink = '';
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlbums().subscribe((data) => {
      this.handleAlbumData(data);
    });
  }

  handleAlbumData(data: object) {
    this.loading = false;
    if (data.hasOwnProperty('body')) {
      this.albums = this.albums.concat(data['body']);
    }
    this.initLoadMoreLink(data);
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

  loadMoreAlbums() {
    if (this.loading) {
      return null;
    }
    this.loading = true;
    this.apiService.getFromUrl(this.loadMoreLink).subscribe((data) => {
      this.handleAlbumData(data);
    });
  }

}
