import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConditionTypesData } from '../models/conditionTypes';

@Injectable({
  providedIn: 'root'
})
export class ConditionTypeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getData(): Observable<ConditionTypesData[]> {
    return this.http.get<ConditionTypesData[]>(`${this.apiServerUrl}/conditionTypes`);
  }


  // private url = "http://127.0.0.1:8080/autoclaims"


  // constructor(private http: HttpClient) {}

  // getData(): Observable<ConditionTypesData[]> {
  //   return this.http.get<ConditionTypesData[]>(this.url)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     );
  //     }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
