import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums-widget',
  templateUrl: './albums-widget.component.html',
  styleUrls: ['./albums-widget.component.scss']
})
export class AlbumsWidgetComponent implements OnInit {
  albums = [];
  loading = true;
  // config for the slider carousel
  // spent far too long finding a lightweight carousel plugin I like haha
  overrideConfig = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlbums().subscribe((data) => {
      this.loading = false;
      if (data.hasOwnProperty('body')) {
        this.albums = data['body'];
      }
    });
  }

  // Having a 5-item row in mobile view is probably a bad idea... so let's show 1 at a time
  onResize(event) {
    const width = event.target.innerWidth;
    this.overrideConfig['slidesPerView'] = width < 768 ? 1 : 5;
  }

}
