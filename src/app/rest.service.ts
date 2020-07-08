/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

/** rxjs Imports */
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**
 * Users service.
 */
@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  search(searchKey: string): Observable<any> {
    const options = searchKey ?
    { params: new HttpParams().set('searchKey', searchKey) } : {};
    return this.http.get('http://localhost:8080/api/v1/search', options);
  }
}
