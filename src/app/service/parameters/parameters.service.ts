import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParmData } from 'src/app/models/parmetersData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getParData(): Observable<ParmData[]> {
    return this.http.get<ParmData[]>(`${this.apiServerUrl}/parameters`);
  }}
