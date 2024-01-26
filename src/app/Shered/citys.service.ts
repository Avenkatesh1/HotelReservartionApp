import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitysService {

  constructor(private http:HttpClient) { }

  grtCitys(){
    return this.http.get('../../assets/citys.json');
  }
}
