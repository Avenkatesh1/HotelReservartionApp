import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private http:HttpClient) { }
  getTableData(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
