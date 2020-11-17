import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs/index';
import { EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BackendService {
  public static readonly API_URL = environment.baseUrl + '/api/';

  constructor(private http: HttpClient) { }

  private get defaultHttpClientOptions () {
    return {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  }

  private handleUnauthorized = (err) => {
    if (err.status === 401) {
      /*this.authenticationService.logout();*/
      return EMPTY;
    }

    return throwError(err);
  }

  get(serviceUrl: string): Observable<any> {
    return this.http.get(BackendService.API_URL + serviceUrl, this.defaultHttpClientOptions)
      .pipe(catchError(this.handleUnauthorized));
  }

 /* getDownload(serviceUrl: string): Observable<any> {
    return this.http.get(BackendService.API_URL + serviceUrl, {...this.defaultHttpClientOptions,
      observe: 'response', responseType: 'blob'})
      .pipe(catchError(this.handleUnauthorized));
  }*/

  post(serviceUrl: string, body: any): Observable<any> {
    return this.http.post(BackendService.API_URL + serviceUrl, body, this.defaultHttpClientOptions)
      .pipe(catchError(this.handleUnauthorized));
  }

  put(serviceUrl: string, body: any): Observable<any> {
    return this.http.put(BackendService.API_URL + serviceUrl, body, this.defaultHttpClientOptions)
      .pipe(catchError(this.handleUnauthorized));
  }

  delete(serviceUrl: string): Observable<any> {
    return this.http.delete(BackendService.API_URL + serviceUrl, this.defaultHttpClientOptions)
      .pipe(catchError(this.handleUnauthorized));
  }

  getPublicContent(): Observable<any> {
    return this.http.get(BackendService.API_URL + 'test/all', { responseType: 'text' });
  }
}
