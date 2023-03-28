import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConditionTypesData } from 'src/app/models/conditionTypes';

@Injectable({
  providedIn: 'root',
})
export class ConditionTypeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getConData(): Observable<ConditionTypesData[]> {
    return this.http.get<ConditionTypesData[]>(
      `${this.apiServerUrl}/conType/all`
    );
  }
}
