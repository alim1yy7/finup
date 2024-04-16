import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '@finup/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  getAllChartData() {
    return this.http.get(`${this.baseUrl}/transaction/all-date-amount`);
  }
  getAllCategories() {
    return this.http.get(`${this.baseUrl}/category/`);
  }
  getTransactionsByCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/category`);
  }
}
