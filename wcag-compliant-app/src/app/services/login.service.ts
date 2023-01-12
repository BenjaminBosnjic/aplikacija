import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  verifyLogin(email: string, password: string): void {
    let members: any[];
    this.http.get('http://localhost:3000/members').subscribe((data: any[]) => {
      members = data;

      let verified = false;

      for(let member of members) {
        if(member.email === email && member.password === password) {
          verified = true;
        }
      }
  
      if (verified) {
        console.log("Verified");
        return;
      }
      
      console.log("Incorrect data");
    });

  }
}
