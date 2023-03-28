import { Observable } from 'rxjs';
import { claimsData } from 'src/app/models/claimsData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getParData(): Observable<claimsData[]> {
    return this.http.get<claimsData[]>(`${this.apiServerUrl}/claims/all`);
  }
}
