import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinCapService {
  private apiUrl = 'https://api.coincap.io/v2';

  constructor(private http: HttpClient) {}

  getMarketData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/assets`);
  }
}
