import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()

export class CountriesService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getCountries(): Observable<any> {
    return this.http.get(endpoint + 'rest/v2/all').pipe(
      map(this.extractData));
  }

  getCountryDetails(CountryName): Observable<any> {
    return this.http.get(endpoint + 'rest/v2/name/' + CountryName + "?fullText=" + true).pipe(
      map(this.extractData));
  }

  getCountriesByRegion(regionName): Observable<any> {
    return this.http.get(endpoint + 'rest/v2/region/' + regionName).pipe(
      map(this.extractData));
  }

  getCountriesByName(name, IsFullName): Observable<any> {
    return this.http.get(endpoint + 'rest/v2/name/' + name + "?fullText=" + IsFullName).pipe(
      map(this.extractData));
  }

  getCountryNewsMappings(): Observable<any> {
    return this.http.get("../../Mappings/CountryNewsMap.json")
  }
}




const endpoint = 'https://restcountries.eu/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};