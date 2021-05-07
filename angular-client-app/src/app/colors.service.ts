import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Color } from './color';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class ColorService {

  private colorsUrl = 'http://localhost:8085/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET colors from the resource server */
  getColors(): Observable<Color[]> {
    const url = `${this.colorsUrl}/user/colors`;
    return this.http.get<Color[]>(url)
      .pipe(
        tap(_ => this.log('fetched colors list')),
        catchError(this.handleError<Color[]>('getColors', []))
      );
  }

  /** GET color by hexcode */
  getColor(hexcode: string): Observable<Color> {
    const url = `${this.colorsUrl}/user/color/${hexcode}`;
    return this.http.get<Color>(url).pipe(
      tap(_ => this.log(`fetched color hexcode=${hexcode}`)),
      catchError(this.handleError<Color>(`getColor id=${hexcode}`))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ColorService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ColorService: ${message}`);
  }
}