import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }
  
  getBlog(id: number){
    return this.httpClient.get('assets/blogs/TrackingViruses.txt', { responseType: 'text' });
  }
}
