import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  book(checkUp: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post('http://localhost:3000/booking', checkUp,
    {
      headers: headers  
    });
  }
}
