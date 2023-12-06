import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor( private httpService: HttpClient) { }

  getData<T>(url: string): Observable<T> {
     return this.httpService.get<T>(url);
  }
}
