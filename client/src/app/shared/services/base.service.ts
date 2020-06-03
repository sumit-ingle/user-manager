import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  postData(url: string, data: any, headers: any): Observable<any> {
    const httpOptions = {
      headers: headers
    };

    return this.httpClient.post<any>(url, data, httpOptions).pipe(
      tap((d: any) => console.log('baseService postData called.')),
      catchError(this.handleError<any>('base service post', 'error'))
    );
  }

  getData(url: string, headers: any): Observable<any> {
    const httpOptions = {
      headers: headers
    };
    let data: any;
    return this.httpClient.get(url, httpOptions).pipe(
      tap((response: any) => { data = response, console.log("baseService get data returned.") }),
      catchError(this.handleError<any>('base service get', 'error')));
  };

  deleteData(url: string, headers: any): Observable<any> {
    let header = new HttpHeaders(headers);

    const httpOptions = {
      headers: headers
    };

    return this.httpClient.delete<any>(url, httpOptions).pipe(
      tap(_ => console.log('baseService deleted the data')),
      catchError(this.handleError<any>('base service delete', 'error'))
    );
  }

  putData(url: string, data: any, headers: any): Observable<any> {
    const httpOptions = {
      headers: headers
    };

    return this.httpClient.put<any>(url, data, httpOptions).pipe(
      tap((d: any) => console.log('baseService putData called.')),
      catchError(this.handleError<any>('base service post', 'error'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  };
}
