/*
 * A quick & simple API service to grab the albums & photos
 * Complete with options for pagination, and some error checking thrown in there
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // Some straightforward API handler code below
  private apiGet(url: string, req: object) {
    return this.httpClient.get(url, req).pipe(
      retry(5),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('API ERROR:', error.error.message);
    } else {
      console.error('API ERROR:', error);
    }
    return throwError('Failed to retrieve data! Please try again later.');
  }

  getPaginationLinks(linkString: string) {
    // Read from the API docs this is how the links are delimited
    // An big string of multiple "<http://mylink.com>;rel=\"hello\",<http://anotherlink.com>;rel=\"goodbye\"" needs to be broken up
    return linkString.split(',').map((segment) => {
      const result = segment.split(';');
      // For a more robust solution, probably a few more checks needed here...
      return {
        rel: result[1].replace(/[\"""\=]/g, '').substring(4),
        url: result[0].replace(/[<>]/g, '')
      };
    });
  }

  // Now to actually get the data we want
  getAlbums() {
    return this.apiGet('https://jsonplaceholder.typicode.com/albums/', {
      params: new HttpParams()
        .set('_limit', '10')
        .set('_page', '1')
      ,
      // observe response gets me the headers back as well - which gives a very handy link to the prev/next page of results
      observe: 'response'
    });
  }

  getAlbum(albumId: string | number) {
    return this.apiGet(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {});
  }

  getAlbumPhotos(albumId: string | number) {
    return this.apiGet(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, {
      params: new HttpParams()
        .set('_limit', '20')
        .set('_page', '1')
      ,
      observe: 'response'
    });
  }

  getPhotos() {
    return this.apiGet('https://jsonplaceholder.typicode.com/photos/', {
      params: new HttpParams()
        .set('_limit', '20')
        .set('_page', '1')
        .set('_sort', 'desc')
        // .set('_userId', '1')
      ,
      observe: 'response'
    });
  }

  getPhoto(photoId: string | number) {
    return this.apiGet(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {});
  }

  getFromUrl(url: string) {
    return this.apiGet(url, {
      observe: 'response'
    });
  }

  failMiserably() {
    return this.getFromUrl(`http://todays.gonna.be.the.day.that.theyre.gonna.throw.it.back.to.you`);
  }
}
