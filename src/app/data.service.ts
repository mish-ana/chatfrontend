import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,  private router:Router) { }
  registerdata(item:any)
  {   
    return this.http.post("http://localhost:2222/register",{"data":item})
    
    
  }

  login(item:any)
  {   
    return this.http.post("http://localhost:2222/login",{"data":item})
  }
  getUserName(id:any) {
    return this.http.get("http://localhost:2222/username",{
    params: new HttpParams().append('token', id)
  })
  }
}


