import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
      let body = res;
      return body || { };
  }

  getNewsSources(): Observable<any> {
    return this.http.get(endpoint + 'sources', httpOptions).pipe(
      map(this.extractData));
    }
  getNewsListingBySource(NewsSourceID : any): Observable<any> {
    return this.http.get(endpoint + 'top-headlines?sources=' + NewsSourceID, httpOptions).pipe(
      map(this.extractData));
  }
}

const endpoint = 'https://newsapi.org/v2/';
const apiKey = 'f2abeb3e0d23446bb9783ffb6c2702bc'
const httpOptions = {
headers: new HttpHeaders({  
  'X-Api-Key': apiKey
})
}
