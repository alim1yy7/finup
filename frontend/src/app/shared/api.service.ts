import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  getAllChartData() {
    return this.http.get(`${this.baseUrl}/transaction/all-date-amount`);
  }
}
