import { DistributorsData } from './../models/distributorsData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Claims1Service {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getClaims1Data(): Observable<DistributorsData[]> {
    return this.http.get<DistributorsData[]>(`${this.apiServerUrl}/cummdist`);
  }}
