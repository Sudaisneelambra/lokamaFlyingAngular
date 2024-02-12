import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class agencyService {
  constructor(private http: HttpClient) {}

  private api = 'http://localhost:3000';

  addProfile(data: any): Observable<any> {
    return this.http.post(`${this.api}/agency/profileadd`, data);
  }

  private userapi = 'http://localhost:3000';

  agencylogout(): Observable<any> {
    const one = localStorage.getItem('token');
    console.log(one);

    localStorage.removeItem('token'); // Remove JWT token from localStorage upon logout
    localStorage.removeItem('type'); // Remove JWT token from localStorage upon logout
    return this.http.get(`${this.userapi}/user/logout`);
  }
}
