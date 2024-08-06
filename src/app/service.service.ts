import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url="http://127.0.0.1:5000/api/data";
url2="http://127.0.0.1:5000/api/data2";
url3="http://127.0.0.1:5000/api/data3";
url4="http://127.0.0.1:5000/api/data4";
url5="http://127.0.0.1:5000/api/data5";
url6="http://127.0.0.1:5000/api/data6";

  constructor(private http:HttpClient) { }
  saveusers(data:any){
    return this.http.post(this.url,data)
  }
  saveusers2(data:any){
    return this.http.post(this.url2,data)
  }
  saveusers3(data:any){
    return this.http.post(this.url3,data)
  }
  saveusers4(data:any){
    return this.http.post(this.url4,data)
  }
  saveusers5(data:any){
    return this.http.post(this.url5,data)
  }
  saveusers6(data:any){
    return this.http.post(this.url6,data)
  }
}
