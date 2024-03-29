import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class userprofileservice {

  constructor(private http: HttpClient, private router:Router ) {}

  private api = environment.backEndurl;

  postuserdata(data:any):Observable<any>{
    return this.http.post(`${this.api}/user/profileuser`,data)
  }

  getprofile():Observable<any>{
    return this.http.get(`${this.api}/user/getprofile`)
  }

  getprof(id:any):Observable<any>{
    return this.http.get(`${this.api}/user/getprof/${id}`)
  }

  getusername():Observable<any>{
    return this.http.get(`${this.api}/user/username`)
  }
 
  
 
}
