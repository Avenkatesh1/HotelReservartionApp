import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingTableData } from '../Material/Modules/Booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private http:HttpClient) { }
  getTableData():Observable<BookingTableData[]>{
    return this.http.get<BookingTableData[]>('https://jsonplaceholder.typicode.com/users')
  }
}
