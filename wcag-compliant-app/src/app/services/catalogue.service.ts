import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): any {
    return this.http.get('http://localhost:3000/items');
  }
}
