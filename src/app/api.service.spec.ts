import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should pass the albums retrieval call', () => {
    const service: ApiService = TestBed.get(ApiService);
    const result = service.getAlbums();
    expect(result).toBeTruthy();
  });

  it('should pass the photos retrieval call', () => {
    const service: ApiService = TestBed.get(ApiService);
    const result = service.getPhotos();
    expect(result).toBeTruthy();
  });
});
